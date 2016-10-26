var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');
var path = require('path');

console.log('webpack.dev.config.only-dev-server.js');

module.exports = {
  entry: [
    __dirname + '/src/index.js',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server'
    //'webpack/hot/dev-server'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    hot:true,
    contentBase: './dist',
    port:3001,
    proxy: {
      "**": "http://localhost:3000"
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
    ]
  }
};
