var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var env = require('yargs').argv.mode;
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var libraryName = 'ocfrontend';

var plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
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
    root: path.resolve('./src'),
    extensions: ['', '.js'],
  },
  plugins: plugins,
  postcss: function() {
    return [precss, autoprefixer];
  },
};

module.exports = config;
