import React from "react";

export default function Home(){
    return (
        <div>

            <h2>Introducing Hooks</h2>

            <p>
                These are notes I took while reading the Hooks documentation at <a href="https://reactjs.org/docs/hooks-intro.html" title="Introducing Hooks">reactjs.org/docs/hooks-intro</a>
            </p>

            <p>
                Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. There are no plans to remove classes from React.

            </p>
            <p>
                Hooks provide a more direct API to React concepts like: <strong>props, state, context, refs, and lifecycle</strong>. Hooks also offer a new way to combine them.

            </p>

            <p>
                <strong>Until Hooks came along, React did not offer a way to “attach” reusable behavior to a component (for example, connecting it to a store). </strong><strong>Render props</strong> and <strong>higher-order components</strong> tried to solve this. But these patterns require you to restructure your components when you use them. A typical React application has a “wrapper hell” of components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions. React needed a better primitive for sharing stateful logic.
            </p>

            <p>
                <strong>With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. </strong> And they allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community. 
            </p>
            
            <p>
                Components that start out simple can grow into an unmanageable mess of stateful logic and side effects. <strong>With classes, each lifecycle method often contains a mix of unrelated logic. And related code that changes together gets split apart, while completely unrelated code ends up combined in a single method.</strong>  This makes it too easy to introduce bugs and inconsistencies.
            </p>
        </div>
    )
}