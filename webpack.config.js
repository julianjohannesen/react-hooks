/** @format */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: { 
		index: path.resolve(__dirname, "src", "index.js") 
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "bundle.js",
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html"),
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		// This line will use the History API to preserve your links, even when you refresh the page. However, it only works in development.
		historyApiFallback: true,
		// Previously this was set to "dist"
		contentBase: "./",
		hot: true,
	},
};


