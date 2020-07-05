/** @format */

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./nav-menu.js";
import {Hooks} from "./hooks.js";
//import Notes from "../README.md";

const Home = () => <h2>Home</h2>;
const Notes = () => <h2>Notes</h2>;

export default function App() {
	return (
		<Router>
            <Nav />
            {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/hooks">
                    <Hooks />
                </Route>
                <Route path="/notes">
                    <Notes />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                {/*404 page?*/}
            </Switch>
        </Router>
    );
}
