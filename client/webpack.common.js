const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
	entry: {
		vendor: ["styled-components"],
		popup: path.resolve("src/popup/popup.jsx"),
		options: path.resolve("src/options/options.jsx"),
		dailyLogFiller: path.resolve("src/contentScript/dailyLogFiller.js"),
		copyForms: path.resolve("src/contentScript/copyForms.js"),
		pasteForms: path.resolve("src/contentScript/pasteForms.js"),
		backgroundScript: path.resolve("src/backgroundScript/backgroundScript.js"),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						plugins: [
							[
								"@babel/plugin-transform-runtime",
								{
									helpers: false,
									regenerator: true,
								},
							],
						],
					},
				},
				exclude: "/node_modules",
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg|gif)$/,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		extensions: [".jsx", ".js"],
	},
	plugins: [
		new Dotenv({
			path: ".env",
		}),
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false,
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve("src/static"),
					to: path.resolve("dist"),
				},
			],
		}),
		...getHtmlPlugins(["popup", "options"]),
	],
	output: {
		filename: "[name].js",
		path: path.resolve("dist"),
	},
	optimization: {
		splitChunks: {
			chunks(chunk) {
				return chunk.name !== "contentScript" && chunk.name !== "background";
			},
		},
	},
};

function getHtmlPlugins(chunks) {
	return chunks.map(
		(chunk) =>
			new HtmlPlugin({
				title: "TAMC Extension",
				filename: `${chunk}.html`,
				chunks: [chunk],
			})
	);
}
