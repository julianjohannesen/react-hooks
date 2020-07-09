/** @format */

import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { UseStateExplanation } from "../pages/use-state.js";
import { UseEffectExplanation 	} from "../pages/use-effect.js";
import NoMatch from "../pages/no-match.js";

// An example of a custom hook function. useFriendStatus will work like useState, but also subscribe and then unsubscribe us from the chat API that we need to query.
function UseFriendStatus(friendID) {
	// Use useState to get out variable and state handler
	const [isOnline, setIsOnline] = useState(null);

	// Define a handler to use when status changes occur
	function handleStatusChange(status) {
		setIsOnline(status.isOnline);
	}

	// Use useEffect to subscribe to your friend's status as a side effect
	useEffect(() => {
		// Subscribe here.
		ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
		// But also return a function that allows us to unsubscribe. This is where we clean up after ourselves.
		return () => {
			ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
		};
	});

	// Return the friend's status: online or not.
	return isOnline;
}

// And then here's the example component that would use our custom hook
function FriendStatus(props) {
	const isOnline = useFriendStatus(props.friend.id);

	if (isOnline === null) {
		return "Loading...";
	}
	return isOnline ? "Online" : "Offline";
}

export function HookPageRouting() { 
	console.log(useRouteMatch())
	// useParams contains the dynamic part of our url /hooks/:hookId
	let { hookId } = useParams();
	if(hookId === 'use-state'){
		return <UseStateExplanation />
	}
	else if(hookId === 'use-effect'){
		return <UseEffectExplanation />
	}
	else {
		return <NoMatch hookId={hookId} />
	}
	
}
