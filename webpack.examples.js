var path = require('path');

var plugins = [];

var config = {
  entry: __dirname + '/examples/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/examples-build',
    filename: 'examples.js'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      }
      /* {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }*/
    ]
  },
  resolve: {
    root: path.resolve('./examples'),
    extensions: ['', '.js']
  },
  plugins: plugins
};

module.exports = config;
