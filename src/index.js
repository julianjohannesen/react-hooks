/** @format */

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// An example of a counter component using the useState hook
function ExampleCounter() {
	// Declare a new state variable, which we'll call "count"
	const [count, setCount] = useState(0);

	return (
		<div>
			<h2>Counter 1</h2>
			<p>An example counter that uses the useState hook.</p>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}

// An example component that uses useState twice in the same component
function ExampleWithManyStates() {
	// Declare multiple state variables!
	// So do I end up with an age const set to 42? And then I can update it with setAge? I think setAge is just setState but specifically for our age variable.
	const [age, setAge] = useState(42);
	const [fruit, setFruit] = useState("banana");
	const [todos, setTodos] = useState([
		// A single todo item
		{ text: "Learn Hooks" },
	]);
}

// The useEffect hook is similar to the componentDidMount, componentDidUpdate, and componentWillUnmount APIs, but in one unified API
function UseEffectExample() {
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

// An example of a custom hook function. 
function useFriendStatus(friendID) {
	const [isOnline, setIsOnline] = useState(null);

	function handleStatusChange(status) {
		setIsOnline(status.isOnline);
	}

	useEffect(() => {
		// Subscribe here
		ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
		// But also return a function that allows us to unsubscribe
		return () => {
			ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
		};
	});

	return isOnline;
}

ReactDOM.render(
	<div>
		<h1>Hook Examples</h1>
		<ExampleCounter />
		<UseEffectExample />
	</div>,
	document.getElementById("root")
);

// Use hot module replacement
module.hot.accept();
