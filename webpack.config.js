const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
	entry: "./src/js/controller.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	mode: "development",
	plugins: [new ESLintPlugin()],
};

module: {
	rules: [
		{
			test: /\.css$/,
			use: ["style-loader", "css-loader"],
		},
	];
}
