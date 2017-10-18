import log from 'winston';
import { Config } from './config';

// set log as cli mode
log.cli();


// fancy logging when the server is ready
function logServerConfig(err) {
  if (err) log.error(err);

  const url = ['http://', Config.host, ':', Config.port].join('');

  log.info('====');
  log.info('Environment:', Config.env);
  log.info('Listening at:', url);
  log.info('====');
}

export { log, logServerConfig };
