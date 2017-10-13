const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const utils = require('./webpack/utils.js');
const getBaseConfiguration = require('./webpack/base.config.js');

const libraryName = 'oc-common-ui';
const isProduction = utils.isProduction();

const params = {
  root: __dirname,
  buildPath: 'lib',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: isProduction ? `${libraryName}.min.js` : `${libraryName}.js`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  entry: {
    app: path.join(__dirname, '/src/index.js'),
  },
};

const config = merge(getBaseConfiguration(params), {
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
  plugins: [
    new ExtractTextPlugin({ filename: isProduction ? `${libraryName}.min.css` : `${libraryName}.css` }),
  ],
});

module.exports = config;
