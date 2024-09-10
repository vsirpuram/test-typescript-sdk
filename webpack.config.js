const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	entry: "./src/index.ts",
	target: "node",
	mode: "production",
	externals: [nodeExternals()],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		libraryTarget: "commonjs2",
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
};
