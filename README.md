# Learning React Hooks

Notes from the React Hooks documentation.

## Introducing Hooks – React

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. There are no plans to remove classes from React.

Hooks don’t replace your knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know: **props, state, context, refs, and lifecycle**. As we will show later, Hooks also offer a new powerful way to combine them.

### The Problem

**React doesn’t offer a way to “attach” reusable behavior to a component** (for example, connecting it to a store). render props and higher-order components try to solve this. But these patterns require you to restructure your components when you use them, which can be cumbersome and make code harder to follow. If you look at a typical React application in React DevTools, you will likely find a “wrapper hell” of components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions. React needs a better primitive for sharing stateful logic.

**With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. And they allow you to reuse stateful logic without changing your component hierarchy**. This makes it easy to share Hooks among many components or with the community.

Components that start out simple can grow into an unmanageable mess of stateful logic and side effects. **If you can only use classes, each lifecycle method often contains a mix of unrelated logic**. For example, components might perform some data fetching in componentDidMount and componentDidUpdate. However, the same componentDidMount method might also contain some unrelated logic that sets up event listeners, with cleanup performed in componentWillUnmount. **Mutually related code that changes together gets split apart, but completely unrelated code ends up combined in a single method**. This makes it too easy to introduce bugs and inconsistencies.

Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data) rather than forcing a split based on lifecycle methods.

Hooks let you use more of React’s features without classes

## Hooks at a Glance

```js
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Here, useState is a Hook. We call it inside a function component to add some local state to it. React will preserve this state between re-renders.

useState returns a pair:
    - **The current state value**
    - **A function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.**

**The only argument to useState is the initial state.**

In the example above, the initial state is 0 because our counter starts from zero. Note that unlike this.state, the state here doesn’t have to be an object — although it can be if you want. The initial state argument is only used during the first render.

You can use the State Hook more than once in a single component.

```js
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

The array destructuring syntax lets us give different names to the state variables we declared by calling useState. These names aren’t a part of the useState API. Instead, React assumes that if you call useState many times, you do it in the same order during every render. 

React provides a few built-in Hooks like useState. You can also create your own Hooks to reuse stateful behavior between different components.

### The Effect Hook

**useEffect, adds the ability to perform side effects from a function component**. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state.

By default, React runs the effects after every render — including the first render.

Effects may also optionally specify how to “clean up” after them by returning a function.

Just like with useState, you can use more than a single effect in a component.

### Rules for Hooks

Hooks are JavaScript functions, but they impose two additional rules:

    - Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions."
    - Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions.

### Custom Hooks

Sometimes, we want to reuse some stateful logic between components. Traditionally, there were two popular solutions to this problem:

    - higher-order components
    - render props. 

Custom Hooks let you do this, but without adding more components to your tree.

The state of these components is completely independent. Hooks are a way to reuse stateful logic, not state itself.

In fact, each call to a Hook has a completely isolated state — so you can even use the same custom Hook twice in one component.

### Hook Naming Convention

Custom Hooks are more of a convention than a feature. If a function’s name starts with ”use” and it calls other Hooks, we say it is a custom Hook. The useSomething naming convention is how our linter plugin is able to find bugs in the code using Hooks.

### Other Hooks

- useContext lets you subscribe to React context without introducing nesting
- useReducer lets you manage local state of complex components with a reducer

## useState

Here's the class version of the counter up above.

```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```