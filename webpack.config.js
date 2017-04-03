const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const flexbugs = require('postcss-flexbugs-fixes');

const libraryName = 'ocfrontend';
const outputFile = `${libraryName}.js`;

const getBaseConfiguration = require('./webpack/base.config.js');

const params = {
  root: __dirname,
  buildPath: 'lib',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  entry: {
    app: path.join(__dirname, '/src/index.js'),
  },
};

const config = getBaseConfiguration(params);
config.devtool = 'source-map';
config.externals = [nodeExternals()];
config.module.rules.push({
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          minimize: process.env.NODE_ENV === 'production',
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [flexbugs, precss, autoprefixer],
        },
      },
      'sass-loader',
    ],
  }),
});
config.plugins.push(new ExtractTextPlugin({ filename: 'ocfrontend.css' }));

module.exports = config;
