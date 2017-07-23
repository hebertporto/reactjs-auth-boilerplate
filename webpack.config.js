const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/public`,
    filename: './bundle.js',
  },
  devServer: {
    port: 8080,
    contentBase: './public',
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        enforce: 'pre',
        exclude: [/node_modules/, /libs/],
        loader: 'eslint-loader',
      },
    ],
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-3'],
      },
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    }],
  },
}
