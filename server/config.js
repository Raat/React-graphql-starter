import dotenv from 'dotenv';
import getenv from 'getenv';
import path from 'path';

// load env file
dotenv.config();

// get env var
const Config = getenv.multi({
  env: 'NODE_ENV',
  host: 'SERVER_HOST',
  port: 'SERVER_PORT',
});

// directories we need in the webpack and express
const Dir = {
  src: path.resolve(__dirname, '..'),
  node_modules: path.resolve(__dirname, '..', 'node_modules'),
  views: path.resolve(__dirname, 'views'),
  public: path.resolve(__dirname, '..', 'public'),
  build: path.resolve(__dirname, '..', 'public', 'build'),
  static: path.resolve(__dirname, '..', 'public', 'static'),
};

export { Config, Dir };
