const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const APP_DIR = path.resolve(__dirname, 'src/app/');
const BUILD_DIR = path.resolve(__dirname, 'public/');

var config = {
  context: APP_DIR,
  entry: './index.js',
  module: {
    loaders: [{
      test: /\.js?/,
      include: APP_DIR,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
      plugins: ['transform-decorators-legacy'],
      presets: ['es2015', 'react', 'stage-1']
    }, {
      test: /\.scss$/,
      include: APP_DIR,
      loaders: ['style', 'css', 'autoprefixer', 'sass?sourceMap']
    }, {
      test: /\.css$/,
      include: APP_DIR,
      loaders: ['style', 'css', 'autoprefixer']
    }]
  },
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(config, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  });
}

module.exports = config;
