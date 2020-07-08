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
import { HookExamples } from "../components/hook-examples.js"
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
                {/*What is match.path doing? The placeholder ":hookId" stands in for whatever the user navigates too, e.g. /hooks/use-state. But what if they navigate to a non-existent topic?   */}
				<Route exact path={`${match.path}/:hookId`} children={<HookExamples />}>
				</Route>
                {/*This page is the plain old /hooks page*/}
				<Route path={match.path}>
					<h3>Please select a topic.</h3>
				</Route>
				<Route path="*">
					<NoMatch />
				</Route>
			</Switch>
		</div>
	</Router>
	);
}
