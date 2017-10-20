import React from 'react';
import propTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import client from './client';

const ApolloClient = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

ApolloClient.propTypes = {
  children: propTypes.element,
};

export default ApolloClient;
