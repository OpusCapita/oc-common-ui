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
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'style!css!postcss!sass',
      },
      {
        test: /\.svg$/,
        loaders: ['babel','react-svg'],
        exclude: /node_modules/,
      },
      /* {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }*/
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
