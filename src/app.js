/** @format */

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./components/nav-menu.js";
import {Hooks} from "./pages/hooks.js";
//import Notes from "../README.md";
import NoMatch from "./pages/no-match.js";
import Home from "./pages/home.js"

const Notes = () => <h2>Notes</h2>;

export default function App() {
	return (
		<Router>
            <Nav />

            <Switch>

                {/* In production, redirects go to index.html. Including index.html here ensures that  that when a redirect happens it doesn't load the home page, but also trigger NoMatch rendering with "No match for index.html." */}
                <Route exact path={["/", "/index.html"]}>
                    <Home />
                </Route>

                <Route path="/hooks">
                    <Hooks />
                </Route>

                <Route exact path="/notes">
                    <Notes />
                </Route>
                
                <Route path="*">
                    <NoMatch />
                </Route>
                
            </Switch>

        </Router>
    );
}
