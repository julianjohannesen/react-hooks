/** @format */

import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import Helmet from "react-helmet";
import { TypographyStyle, GoogleFont } from "react-typography";
import typography from "./utils/typography.js";
import "./assets/styles.css";

ReactDOM.render(
	<React.Fragment>
		<Helmet>
			{typography.injectStyles()}
		</Helmet>
		<div>
			<h1>Learning about React Hooks</h1>
			<App />
		</div>
	</React.Fragment>,
	document.getElementById("root")
);

// Use hot module replacement
module.hot.accept();
