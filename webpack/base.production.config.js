/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const path = require('path');

function getBaseEnvConfiguration(config) {
  return {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@opuscapita/react-grid': path.resolve('./node_modules/@opuscapita/react-grid/lib/react-grid.min.js'),
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        output: {
          comments: false,
        },
      }),
    ],
  };
}

module.exports = getBaseEnvConfiguration;
