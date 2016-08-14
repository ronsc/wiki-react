const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const config = require('../config');

module.exports = {
	devtool: 'eval',
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8081',
		'webpack/hot/only-dev-server',
		'./ui/common/theme/elements.scss',
		'./ui/client/index.js'
	],
	output: {
		publicPath: 'http://127.0.0.1:8081/static/',
		path: path.join(__dirname, 'static'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: [
					{
						loader: 'babel-loader',
						query: {
							babelrc: false,
							presets: ["es2015", "stage-0", "react"]
						}
					}
				]
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: [
					'style-loader',
					{
						loader: 'css-loader',
						query: {
							sourceMap: true,
							module: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					},
					{
						loader: 'sass-loader',
						query: {
							outputStyle: 'expanded',
							sourceMap: true
						}
					},
					'postcss-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	postcss: function () {
		return [autoprefixer];
	},
	devServer: {
		port: config.clientPort,
		hot: true,
		inline: false,
		historyApiFallback: true
	}
};
