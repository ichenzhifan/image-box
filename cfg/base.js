var autoprefixer = require('autoprefixer');
var path = require('path');
var port = 8000;
var srcPath = path.join(__dirname, '/../src');

module.exports = {
  port: port,
  debug: true,
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: port,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss () {
    return {
      defaults: [autoprefixer]
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!postcss!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!postcss!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};
