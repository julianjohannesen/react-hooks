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

- 1. What if you want to have your links and switch in different components. Can you do that? How do you do that?