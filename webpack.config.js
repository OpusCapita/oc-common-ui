const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.mode;
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
const nodeExternals = require('webpack-node-externals');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const libraryName = 'ocfrontend';

const plugins = [new ExtractTextPlugin('ocfrontend.css')];
let outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = `${libraryName}.js`;
} else {
  outputFile = `${libraryName}.js`;
}

const config = {
  entry: path.join(__dirname, '/src/index.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: [nodeExternals()],
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
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            }])),
      },
      {
        test: /\.svg$/,
        loaders: ['babel', 'react-svg'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', 'jsx'],
  },
  plugins,
  postcss: function postcss() {
    return [precss, autoprefixer];
  },
};

module.exports = config;
