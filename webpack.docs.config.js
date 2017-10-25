const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const flexbugs = require('postcss-flexbugs-fixes');
const utils = require('./webpack/utils.js');
const getBaseConfiguration = require('./webpack/base.config.js');

const target = utils.getTarget();
const isMinimized = !!target === 'production';

const params = {
  root: __dirname,
  buildPath: 'docs',
  output: {
    path: path.join(__dirname, '/docs'),
    filename: 'examples.js',
  },
  entry: {
    app: path.join(__dirname, '/examples/index.jsx'),
  },
};

const plugins = [
  new webpack.LoaderOptionsPlugin({
    debug: false,
    noInfo: true,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js',
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'examples/index.html',
  }),
  new ExtractTextPlugin({
    filename: 'styles/[name].[contenthash].css',
    allChunks: true,
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
];

const config = merge(getBaseConfiguration(params), {
  plugins,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [flexbugs, precss, autoprefixer],
              minimize: isMinimized,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
});

module.exports = config;
