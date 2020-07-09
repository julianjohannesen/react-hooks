/** @format */

import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";
import { HookPageRouting } from "../components/hook-page-routing.js"
import NoMatch from "./no-match.js";

// A simple hooks page with links to other pages like useState and useEffect
export function Hooks() {
    //To do nested navigation use the useRouteMatch hook
	let match = useRouteMatch();
	return (
	<Router>
		<div>
			<h2>Hooks</h2>

				<ul>
					<li>
						{/*match.url must contain the current url*/}
						<Link to={`${match.url}/use-state`}>useState</Link>
					</li>
					<li>
						<Link to={`${match.url}/use-effect`}>useEffect</Link>
					</li>
					<li>
						<Link to={`${match.url}/broken-link`}>Broken Link</Link>
					</li>
				</ul>

{/* The Hooks page has its own <Switch> with more routes that build on the /hooks URL path. You can think of the 2nd <Route> here as an "index" page for all topics, or the page that is shown when no topic is selected */}

			<Switch>

                {/* Making this dynamic with ":hookid" means that my catchall route won't render unless I do some testing within each hook example component  */}
				<Route exact path={`${match.path}/:hookId`} children={<HookPageRouting />}></Route>
                
				{/*This page is the plain old /hooks page. It render regardless of whether there are any pages to show. */}
				{/* <Route path={match.path}>
					<h3>Please select a topic.</h3>
				</Route> */}

				<Route path="*">
					<NoMatch />
				</Route>

			</Switch>
		</div>
	</Router>
	);
}
