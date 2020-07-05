/** @format */

import Typography from "typography";

const typography = new Typography({
	baseFontSize: "18px",
	baseLineHeight: 1.666,
	headerFontFamily: [
		"Avenir Next",
		"Helvetica Neue",
		"Segoe UI",
		"Helvetica",
		"Arial",
		"sans-serif",
	],
	bodyFontFamily: ["Georgia", "serif"],
	// See below for the full list of options.
});

// Output CSS as string.
//typography.toString();
// You can then insert this into Helmet with
/* 
<style>
    {typography.toString()}
</style> 
*/

// Or insert styles directly into the <head> (works well for client-only JS web apps.)
//typography.injectStyles();

// Export helper functions
export default typography
