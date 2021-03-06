const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const flexbugs = require('postcss-flexbugs-fixes');

const params = {
  root: __dirname,
  buildPath: 'examples-build',
  output: {
    path: path.join(__dirname, '/examples-build'),
    filename: 'examples.js',
  },
  entry: {
    app: path.join(__dirname, '/examples/index.jsx'),
  },
};

const getBaseConfiguration = require('./webpack/base.config.js');

const plugins = [
  new HtmlWebpackPlugin({ filename: 'index.html', template: 'examples/index.html' }),
  new webpack.HotModuleReplacementPlugin(),
  new WriteFilePlugin({ log: false }),
  new ProgressBarPlugin({ clear: false }),
];

const resolve = {
  extensions: ['.webpack.js', '.web.js', '.js', '.json', '.jsx'],
  alias: {
    react: path.resolve('./node_modules/react'),
    'react-dom': path.resolve('./node_modules/react-dom'),
    'react-redux': path.resolve('./node_modules/react-redux'),
  },
};

const config = merge(getBaseConfiguration(params), {
  plugins,
  resolve,
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
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
});

const wdsEntries = [
  'webpack-dev-server/client?http://localhost:5555',
  'webpack/hot/only-dev-server',
];

// All entries must include webpack dev server entries
Object.keys(config.entry).forEach((key) => {
  if (Array.isArray(config.entry[key])) {
    config.entry[key] = wdsEntries.concat(config.entry[key]);
  } else {
    const originalEntry = config.entry[key];
    config.entry[key] = wdsEntries.slice(0);
    config.entry[key].push(originalEntry);
  }
});

// Add react transforms as babel plugin
// https://github.com/gaearon/babel-plugin-react-transform
config.module.rules.forEach((loader, index) => {
  if (/^babel/.test(loader.loader)) {
    const reactTransformPlugin = ['react-transform', {
      transforms: [
        {
          transform: 'react-transform-hmr',
          imports: ['react'],
          locals: ['module'],
        },
      ],
    }];
    if (config.module.rules[index].query.plugins) {
      config.module.rules[index].query.plugins.push(reactTransformPlugin);
    } else {
      config.module.rules[index].query.plugins = [reactTransformPlugin];
    }
  }
});

config.devServer = {
  noInfo: true,
  quiet: false,
  port: 5555,
  historyApiFallback: true,
  clientLogLevel: 'error',
  hot: true,
  stats: { colors: true },
  // host: '192.168.0.101', // make dev server available on specific IP
};

module.exports = config;
