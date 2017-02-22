var webpack = require('webpack');
var WriteFilePlugin = require('write-file-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configuration = {
  entry: { 
    app: './examples/index.js'
  },
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
        query: {
          cacheDirectory: true,
          plugins: [           
          ],
        }
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
  plugins: [
    new HtmlWebpackPlugin({
    filename: 'examples.html',
    template: 'examples/examples.html',
    })
  ],
  postcss: function postcss() {
    return [precss, autoprefixer];
  },
};

var wdsEntries = [
  'webpack-dev-server/client?http://localhost:5555',
  'webpack/hot/only-dev-server',
];

// All entries must include webpack dev server entries
Object.keys(configuration.entry).forEach(key => {
  if (Array.isArray(configuration.entry[key])) {
    configuration.entry[key] = wdsEntries.concat(configuration.entry[key]);
  } else {
    const originalEntry = configuration.entry[key];
    configuration.entry[key] = wdsEntries.slice(0);
    configuration.entry[key].push(originalEntry);    
  }
});

// Add react transforms as babel plugin
// https://github.com/gaearon/babel-plugin-react-transform
configuration.module.loaders.forEach((loader, index) => {
  if (/^babel/.test(loader.loader)) {
    const reactTransformPlugin = ['react-transform', {
      'transforms': [
        {
          'transform': 'react-transform-hmr',
          'imports': ['react'],
          'locals': ['module'],
        },
      ],
    }];
    if (configuration.module.loaders[index].query.plugins) {
      configuration.module.loaders[index].query.plugins.push(reactTransformPlugin);
    } else {
      configuration.module.loaders[index].query.plugins = [reactTransformPlugin];
    }
    
  }
});

// Add webpack plugins
configuration.plugins.push(new webpack.HotModuleReplacementPlugin());
configuration.plugins.push(new WriteFilePlugin({ log: false }));
configuration.plugins.push(new ProgressBarPlugin({ clear: false }));

// Webpack dev server configuration
configuration.resolve = {
  extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
};
configuration.devServer = {
  noInfo: true,
  quiet: false,
  port: 5555,
  historyApiFallback: true,
  outputPath: configuration.output.path, // for WriteFilePlugin
  clientLogLevel: 'error',
  hot: true,
  stats: { colors: true },
  // host: '192.168.0.101', // make dev server available on specific IP
};

// Now React will be built in an optimized manner
configuration.plugins.push(new webpack.DefinePlugin({    
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
  },
}));

module.exports = configuration;
