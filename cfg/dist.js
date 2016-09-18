var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var _ = require('lodash');
var publicPath = './assets/';

var baseConfig = require('./base');

var config = _.merge({
  entry: path.join(__dirname, '../src/index'),
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app-[hash].js',
    publicPath: publicPath
  },
  cache: false,
  devtool: false,
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      title: 'Image Box',
      template: './src/index.html'
    })
  ]
}, baseConfig);

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: path.join(__dirname, '/../src')
});

module.exports = config;
