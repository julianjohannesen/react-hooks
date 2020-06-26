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
		contentBase: path.resolve(__dirname, "dist"),
		hot: true,
	},
};
