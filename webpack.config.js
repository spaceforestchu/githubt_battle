var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');
require("babel-core/register");
require("babel-polyfill");
var webpack = require('webpack');


var config = {
  entry:  ['babel-polyfill','./app/index.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/},
      { test: /\.css$/, use: [ 'style-loader', 'css-loader'], exclude: /node_modules/ }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [new HtmlWebPackPlugin({
    template: 'app/index.html'
  })]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env' : {
        'NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  );
}


module.exports = config;

/*
    //public make the browser see
    publicPath: '/'

    devServer: {
      historyApiFallback: true
    }
*/
