const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  plugins: [
    new ExtractTextPlugin("app.css"),
  ],
  module: {
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query:{
        presets: ['es2015', 'react', 'stage-3']
      }
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
    }]
  }
}