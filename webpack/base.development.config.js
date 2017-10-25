/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

function getBaseEnvConfiguration(config) {
  return {
    devtool: 'eval',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      }),
      new WebpackNotifierPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  };
}

module.exports = getBaseEnvConfiguration;
