const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'examples.html',
    template: 'examples/examples.html',
  }),
  new webpack.DefinePlugin({    
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
];

const config = {
  debug: false,
  noInfo: true,
  entry: path.join(__dirname, '/examples/index.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/examples-build'),
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
        test: /\.svg($|\?)/,
        loader: 'url-loader',
        include: /node_modules/,
      },
      {
        test: /\.svg$/,
        loaders: ['babel', 'react-svg'],
        exclude: /node_modules/,
      },
      {
        test: /\.ico$/,
        loader: 'file?name=[name].[ext]',
        include: /images/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ],
  },
  resolve: {
    root: path.resolve('./examples'),
    extensions: ['', '.js', 'jsx'],
  },
  plugins,
  postcss: function postcss() {
    return [precss, autoprefixer];
  },
};

module.exports = config;
