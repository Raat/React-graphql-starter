import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import isDev from 'isdev';
import { Dir } from './server/config';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

let Config = {
  context: Dir.src,
  target: 'web',
  entry: [
    path.join(Dir.src, '/app/index.js'),
  ],
  output: {
    filename: 'main.js',
    pathinfo: true,
    path: path.join(Dir.public, 'build'),
    publicPath: '/',
  },
  resolve: {
    modules: [Dir.src, Dir.node_modules],
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
    new StyleLintPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};

if (TARGET === 'start:prod' && !isDev) {
  Config = merge.strategy({ entry: 'prepend' })(Config, {
    bail: true,
    entry: [
      'babel-polyfill',
    ],
    devtool: 'eval',
    output: { publicPath: '/build/' },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        comments: false,
        dropDebugger: true,
        dropConsole: true,
        compressor: {
          warnings: false,
        },
      }),
    ],
  });
}

if (TARGET === 'start' && isDev) {
  Config = merge.strategy({ entry: 'prepend' })(Config, {
    devtool: 'inline-source-map',
    entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
  });
}


const WebpackConfig = Config;
export default WebpackConfig;
