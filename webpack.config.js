const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: './src/app.js',
	output: {
		path: './dist',
		filename: './bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel", query: { presets: ['es2015'] } },
			{ test: /\.css$/, loader: "style!css!postcss" },
			{ test: /\.svg$/, loader: 'url?mimetype=image/svg+xml' },
			{ test: /\.woff$/, loader: 'url?mimetype=application/font-woff' },
			{ test: /\.woff2$/, loader: 'url?mimetype=application/font-woff' },
			{ test: /\.eot$/, loader: 'url?mimetype=application/font-woff' },
			{ test: /\.ttf$/, loader: 'url?mimetype=application/font-woff' },
			{ test: /\.html$/, loader: "html" },
			{ test: /\.jade$/, loader: "jade" }
		]
	},
	postcss: [ autoprefixer() ],
	// Configuration for dev server
	devServer: {
		contentBase: 'dist',
		port: 3000
	},
	resolve: {
		extensions: ['', '.js', '.json', '.coffee']
	},
	plugins: [
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery",
			Vue: 'vue'
		}),
		new CopyWebpackPlugin(
			[{ from: './src'}],
			{ ignore: ['*.js', '*.css', '*.jade'] }
		)
	]
};