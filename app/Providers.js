import React from 'react';
import PropTypes from 'prop-types';
import ApolloProvider from './services/apollo/provider';
import MaterialThemeProvider from './services/material/provider';

const Providers = ({ children }) => (
  <ApolloProvider>
    <MaterialThemeProvider>
      {children}
    </MaterialThemeProvider>
  </ApolloProvider>
);

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
