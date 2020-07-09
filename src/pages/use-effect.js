import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CounterSnippet() {
    const codeString = `
    function UseEffectExample() {
        const [count, setCount] = useState(0);
    
        // Similar to componentDidMount and componentDidUpdate. Supply a callback that will execute after the component mounts or updates.
        useEffect(() => {
            // Update the document title using the browser API
            document.title = 'You clicked' + count + 'times';
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
    `;
    return (
        <SyntaxHighlighter language="javascript" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

function OtherSnippet() {
    const codeString = ``;
    return (
        <SyntaxHighlighter language="javascript" style={atomDark}>
            {codeString}
        </SyntaxHighlighter>
    );
}

// The useEffect hook is similar to the componentDidMount, componentDidUpdate, and componentWillUnmount APIs, but in one unified API
function UseEffectExample() {
	const [count, setCount] = useState(0);

	// Similar to componentDidMount and componentDidUpdate. Supply a callback that will execute after the component mounts or updates.
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

export function UseEffectExplanation() {
    return (
        <div>
            <h2>
                The useEffect Hook
            </h2>

            <UseEffectExample />

            <CounterSnippet />
        </div>
    )
}