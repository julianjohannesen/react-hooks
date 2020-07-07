/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {HooksAtAGlance} from "../pages/hooks-at-a-glance.js";
import NoMatch from "./no-match.js";

// The useEffect hook is similar to the componentDidMount, componentDidUpdate, and componentWillUnmount APIs, but in one unified API
export function UseEffectExample() {
	const [count, setCount] = useState(0);

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		// Update the document title using the browser API
		document.title = `You clicked ${count} times`;
	});

	return (
		<div>
			<h2>Counter 2</h2>
			<p>
				Another counter that adds a side effect with the useEffect hook.
			</p>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}

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

export function HookExamples() { 
	// useParams contains the dynamic part of our url /hooks/:hookId
	let { hookId } = useParams();
	if(hookId === 'use-state'){
		return <HooksAtAGlance />
	}
	else if(hookId === 'use-effect'){
		return <UseEffectExample />
	}
	else {
		return <NoMatch />
	}
	
}
