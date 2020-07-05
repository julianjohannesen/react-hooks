/** @format */

import React from "react";
import {NavLink} from "react-router-dom";

export default function Nav() {
    return (
	<nav>
		<ul>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/hooks">Hooks</NavLink>
			</li>
			<li>
				<NavLink to="/notes">Notes</NavLink>
			</li>
		</ul>
    </nav>
    );
}
