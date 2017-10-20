import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'node_modules/highlight.js/styles/hybrid.css';
import Root from './Root';

const mountApp = document.getElementById('react-app');

ReactDOM.render(
  <AppContainer>
    <Root/>
  </AppContainer>,
  mountApp,
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextApp = require('./Root').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      mountApp,
    );
  });
}
