const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const PATHS = {
	src: path.join(__dirname, "../src"),
	dist: path.join(__dirname, "../dist"),
	assets: "assets/"
};

module.exports = {
	externals: {
		paths: PATHS
	},

	entry: {
		app: PATHS.src
	},

	output: {
		filename: `${PATHS.assets}js/[name].js`,
		path: PATHS.dist,
		publicPath: ""
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: "vendors",
					test: /(node_modules|libs)/,
					chunks: "all",
					enforce: true
				}
			}
		}
	},

	module: {
		rules: [{
			test: /\.less$/,
			use: [
				"style-loader",
				{
					loader: MiniCssExtractPlugin.loader,
					options: {
						esModule: false,
					},
				},
				{
					loader: "css-loader",
					options: {sourceMap: true}
				}, {
					loader: "postcss-loader",
					options: {sourceMap: true, postcssOptions: {config: path.resolve(__dirname, "../postcss.config.js")}}
				}, {
					loader: "less-loader",
					options: {sourceMap: true}
				}
			]
		}, {
			test: /\.s[ac]ss$/i,
			use: [
				"style-loader",
				{
					loader: MiniCssExtractPlugin.loader,
					options: {
						esModule: false,
					},
				},
				{
					loader: "css-loader",
					options: {sourceMap: true}
				}, {
					loader: "postcss-loader",
					options: {sourceMap: true, postcssOptions: {config: path.resolve(__dirname, "../postcss.config.js")}}
				}, {
					loader: "sass-loader",
					options: {sourceMap: true}
				}
			]
		}, {
			test: /\.css$/,
			use: [
				"style-loader",
				{
					loader: MiniCssExtractPlugin.loader,
					options: {
						esModule: false,
					},
				},
				{
					loader: "css-loader",
					options: {sourceMap: true}
				},
				{
					loader: "postcss-loader",
					options: {sourceMap: true, postcssOptions: {config: path.resolve(__dirname, "../postcss.config.js")}}
				}
			]
		}]
	},

	resolve: {
		alias: {
			"~": "src"
		}
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/[name].css`
		}),

		new HtmlWebpackPlugin({
			template: `${PATHS.src}/index.html`,
			filename: "./index.html",
			inject: true
		}),

		new CopyWebpackPlugin(
			{
				patterns: [
					{from: `${PATHS.src}/static`, to: ""}
				]
			}
		)
	]
};
