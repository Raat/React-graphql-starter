import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'node_modules/highlight.js/styles/hybrid.css';
import App from './components/App';

const mountApp = document.getElementById('react-app');

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  mountApp,
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      mountApp,
    );
  });
}
