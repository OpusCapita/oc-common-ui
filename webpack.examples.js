var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var plugins = [];

var config = {
  entry: __dirname + '/examples/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/examples-build',
    filename: 'examples.js',
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=100&mimetype=application/font-woff&name=[hash].[ext]',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=100&mimetype=application/octet-stream&name=[hash].[ext]',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader?variable=data',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
      },
      {
        test: /\.svg$/,
        loaders: ['babel','react-svg'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    root: path.resolve('./examples'),
    extensions: ['', '.js']
  },
  plugins: plugins,
  postcss: function() {
    return [precss, autoprefixer];
  },
};

module.exports = config;
