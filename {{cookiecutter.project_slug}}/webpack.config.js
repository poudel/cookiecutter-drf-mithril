const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
	path: path.resolve(__dirname, 'static/'),
	filename: 'app.js'
    },
    module: {
	rules: [
	    {test: /\.js/,
	     exclude: /node_modules/,
	     use: {loader: 'babel-loader'}
	    },
	    {test: /\.scss$/,
	     use: ExtractTextPlugin.extract({
		 fallback: 'style-loader',
		 use: ['css-loader', 'sass-loader']
	     })
	    },
	]
    },
    devtool: "source-map",
    plugins: [
	new ExtractTextPlugin('app.css')
    ]
};
