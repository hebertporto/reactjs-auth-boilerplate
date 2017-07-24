const webpack = require('webpack')
const path = require('path')
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
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        enforce: 'pre',
        exclude: [/node_modules/, /libs/],
        loader: 'eslint-loader',
      },
      {
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
      }, {
        test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        loader: 'file',
      },
    ],
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, '/node_modules'),
      jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
      bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js',
    },
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app'),
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
}
