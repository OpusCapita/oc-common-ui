const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const flexbugs = require('postcss-flexbugs-fixes');

const CONFIG = {
  root: __dirname,
  examplesBuildPath: 'examples-build',
  examplesEntry: path.join(__dirname, '/examples/index.jsx'),
};

const plugins = [
  new webpack.LoaderOptionsPlugin({
    debug: false,
    noInfo: true,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'js/vendor.bundle.[hash].js',
  }),
  new CleanWebpackPlugin([CONFIG.examplesBuildPath], {
    root: CONFIG.root,
    verbose: false,
    dry: false,
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'examples/index.html',
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new ExtractTextPlugin({
    filename: 'styles/[name].[contenthash].css',
    allChunks: true,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true,
    },
    output: {
      comments: false,
    },
    mangle: true,
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
];

const config = {
  entry: {
    app: CONFIG.examplesEntry,
  },
  // devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/examples-build'),
    filename: 'js/examples.[hash].js',
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          'url-loader?limit=100&mimetype=application/font-woff&name=[name].[ext]',
        ],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          'url-loader?limit=100&mimetype=application/octet-stream&name=[name].[ext]',
        ],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          'file-loader?name=[name].[ext]',
        ],
      },
      {
        test: /\.ejs$/,
        use: [
          'ejs-loader?variable=data',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [flexbugs, precss, autoprefixer],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg($|\?)/,
        use: [
          'url-loader',
        ],
        include: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'react-svg-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.ico$/,
        use: [
          'file-loader?name=[name].[ext]',
        ],
        include: /images/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [flexbugs, precss, autoprefixer],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve('./examples'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  plugins,
};

module.exports = config;
