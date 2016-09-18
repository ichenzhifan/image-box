var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var baseConfig = require('./base');

var config = _.merge({
  entry: {
    app: [
      'webpack-dev-server/client?http://127.0.0.1:8000',
      'webpack/hot/only-dev-server',
      './src/index'
    ]
  },
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: '[name]-[hash].js'
  },
  // cache: true,
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Image Box',
      template: './src/index.html'
    })
  ]
}, baseConfig);

// Add needed loaders
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: path.join(__dirname, '/../src')
});

module.exports = config;
