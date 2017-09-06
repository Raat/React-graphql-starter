import React from 'react';
import App from './app';
import test from './app.tests';

storiesOf('App', module).add('default', () => {
  const story = <App />;
  specs(test);
  return story;
});
