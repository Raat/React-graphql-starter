import isDev from 'isdev';
import express from 'express';
import serveStatic from 'serve-static';

import { Config, Dir } from './config';
import { logServerConfig } from './logger';
import { hotMiddleware } from './middleware';

const app = express();

// use ejs template engine on express
app
  .set('view engine', 'ejs')
  .set('views', Dir.views);

// loading the hot-middleware
if (isDev) app.use(hotMiddleware);

app
  .use('/build', serveStatic(Dir.build))
  .use('/static', serveStatic(Dir.static));

app.get('*', (req, res) => {
  res
    .status(200)
    .render('index', {
      build: isDev ? null : '/build',
    });
});

app
  .listen(
    Config.port,
    Config.host,
    err => logServerConfig(err));
