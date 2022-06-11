const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},

	devtool: "source-map",

	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
});
