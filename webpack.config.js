const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const flexbugs = require('postcss-flexbugs-fixes');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const buildPath = 'lib';
const libraryName = 'ocfrontend';
const outputFile = `${libraryName}.js`;
const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new ExtractTextPlugin({
    filename: 'ocfrontend.css',
  }),
  new CleanWebpackPlugin([buildPath], {
    root: __dirname,
    verbose: false,
    dry: false,
  }),
];

// if (isProduction) {
//   plugins.push(new UglifyJsPlugin({ minimize: true }));
//   plugins.push(new webpack.DefinePlugin({
//     'process.env': {
//       NODE_ENV: JSON.stringify('production'),
//     },
//   }));
// }

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
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'react-svg-loader'],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  plugins,
};

module.exports = config;
