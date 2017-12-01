var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');
require("babel-core/register");
require("babel-polyfill");

module.exports = {
  entry:  ['babel-polyfill','./app/index.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    //record all the paths
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/},
      { test: /\.css$/, use: [ 'style-loader', 'css-loader'], exclude: /node_modules/ }
    ]
  },
  //start dev sever reload
  devServer: {
    historyApiFallback: true
  },
  plugins: [new HtmlWebPackPlugin({
    template: 'app/index.html'
  })]
}
