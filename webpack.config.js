var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var env = require('yargs').argv.mode;
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

var libraryName = 'ocfrontend';

var plugins = [new ExtractTextPlugin('ocfrontend.css')], outputFile;

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
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=100&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=100&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
          combineLoaders([{
            loader: 'css-loader!postcss-loader!sass-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }])
        )
      },
      {
        test: /\.svg$/,
        loaders: ['babel','react-svg'],
        exclude: /node_modules/,
      },
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
