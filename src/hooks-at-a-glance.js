import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CounterSnippet() {
    const codeString = `
    // An example of a counter component using the useState hook
    function ExampleCounter() {
        // Declare a new state variable, which we'll call "count"
        const [count, setCount] = useState(0);

        return (
            <div>
                <h2>Counter Example</h2>
                <p>An example counter that uses the useState hook.</p>
                <p style="">You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
        );
    }`;
    return (
        <SyntaxHighlighter language="javascript" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

function OtherSnippet() {
    const codeString = `
    function ExampleWithManyStates() {
        // Declare multiple state variables!
        const [age, setAge] = useState(42);
        const [fruit, setFruit] = useState('banana');
        const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
        // ...
    }`;
    return (
        <SyntaxHighlighter language="javascript" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
}

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

export function HooksAtAGlance(){
    return (
        <div>
        <h2>
            Hooks at a Glance
        </h2>

        <ExampleCounter />

        <CounterSnippet />

        <p>
            useState is a Hook. We call it inside a function component to add some local state to it. React will preserve this state between re-renders.

        </p>
        <p>
            useState returns a pair:
            <ul>
                <li>
                    The current state value
                </li>
                <li>
                    A function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.
                </li>
            </ul>
        </p>
        <p>
            <strong>
                The only argument to useState is the initial state. 
            </strong>
            In the example above, the initial state is 0 because our counter starts from zero. Note that unlike this.state, the state here doesn’t have to be an object — although it can be if you want. The initial state argument is only used during the first render.
        </p>
        
        <p>
            You can use the State Hook more than once in a single component.
        </p>
        <OtherSnippet />
        <p>
            The array destructuring syntax lets us give different names to the state variables we declared by calling useState. These names aren’t a part of the useState API. Instead, React assumes that if you call useState many times, you do it in the same order during every render. 

        </p>
        <p>
            React provides a few built-in Hooks like useState. You can also create your own Hooks to reuse stateful behavior between different components.
        </p>
        </div>
    )
}