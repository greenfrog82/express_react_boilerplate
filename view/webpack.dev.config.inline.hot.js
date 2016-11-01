var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    __dirname + '/src/index.js',
    // 'webpack-dev-server/client?http://localhost:3001',
    // 'webpack/hot/only-dev-server'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    // proxy: {
    //   "**": "http://localhost:3000"
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?' + JSON.stringify({
           cacheDirectory: true,
           presets: ['es2015', 'react']
        })],
        exclude: /node_modules/
      }
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'babel', // 'babel-loader' is also a valid name to reference
      //   query: {
      //     presets: ['es2015', 'react']
      // }
      // }
    ]
  }
};
