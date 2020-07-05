# React Router Notes

v5 allows RR to use hooks. However, the next version of RR will change the API even further. It should be here within a year, judging by where we are now. Writing this in July 2020.

## Forward and Back buttons

React Router respects your browsers forward and back buttons. You can do any of the following and the forward and back buttons will work. 
- 1. build routes to top level pages, e.g. /about, /login or whatever
- 2. build routes to nested routes, e.g. /about/staff, /articles/topics
- 3. build routes to dynamic routes that change based on a URL parameter, e.g. /articles/topics/:topicId

## useRouteMatch and useParams

In order to build a nested, dynamic route, you need to use both useRouteMatch and useParams. 

### uRM allows you to build nested routes like /articles/topics. 

### uP allows you to access the URL parameters like the 'topicId' part of /articles/topics/:topicId

It looks like this. 

This first component contains the routing to a second component that will display different items depending on the ':topicId' parameter it receives.

```jsx
export function NestedDynamicRoute(){

    let match = useRouteMatch();
    return (
    <Router>
        
        <Link to={'${match.url}/Kittens'}>Kittens</Link>
        <Link to={'${match.url}/Puppies'}>Puppies</Link>

        <Switch>

            <Route 
                path={'${match.path}/:topicId'}
                children={<Topics />}
            >
            </Route>

            <Route>
                <h3>Please select a topic.</h3>
            </Route>

        </Switch>

    </Router>
)}
```
And this is the component that conditionally renders the correct topic component

```jsx
export function Topics() { 
	// useParams contains the dynamic part of our url /hooks/:hookId
	let { topicId } = useParams();
	if(topicId === 'Kittens'){
		return <Kittens />
	}
	if(topicId === 'Puppies'){
		return <Puppies />
	}
	
}
```

Note that the Links in the first component will always render in this example. The topic component will render below the Links

## Questions

### 1. Can a Router and Links be in different components?

Yes. You can put your Router and Links in different components. Just remember that wherever your Router goes, you'll need to import the components that are rendered by different routes.

### 2. Why can't I see my pages when I reload?

If you're serving from the production directory, e.g. "dist" or "build", then if you get an error when reloading a page, that's because the routing doesn't exist at the time that the page loads. Rather, the routing is created in the process of loading the page.

Just creating a catch-all route will not fix this problem. If your page has links that do not function, the catchall will work. However, typing non-existent links into the address bar will cause the same error you saw above.

This doesn't happen in development if you're configured webpack.config.js's "devserver" setting. 

```js
	devServer: {
		// This line will use the History API to preserve your links, even when you refresh the page. Note, it only works in development.
		historyApiFallback: true,
		contentBase: "./",
		hot: true,
	},
```

To fix this problem in the production build, you have to make changes on the backend. Creating an isomorphic backend in which backend routing mirrors frontend routing  is the best solution, but you can also create a catchall.  The way to do that depends on your server.

### 3. Why isn't my NoMatch component rendering?

See question 2 first.

### 4. If you have dynamic links with URL parameters, how do you create a NoMatch route that will render when the URL parameter does not exist? For example, I might have /articles/:topic and have article topics "react" and "react-router". How do I render NoMatch for /articles/bananas?