import historyFallback from 'connect-history-api-fallback';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from './../webpack.config.babel';

const bundler = webpack(config); // webpack!!

const middleware = [
  webpackDevMiddleware(bundler, {
    publicPath: config.output.publicPath, // this should equal the public path in webpack config
    hot: true, // enable hot reloading
    stats: {
      colors: true, // add colors in the console log
    },
  }),
  webpackHotMiddleware(bundler, {
    reload: true, // reload page when webpack gets stuck
  }),
  historyFallback(), // historyFallback for spa's
];

export { middleware as hotMiddleware };
