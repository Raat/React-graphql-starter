import React from 'react';
import propTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import client from './client';
import store from '../redux/store';

const ApolloClient = ({ children }) => (
  <ApolloProvider store={store()} client={client}>
    {children}
  </ApolloProvider>
);

ApolloClient.propTypes = {
  children: propTypes.element,
};

export default ApolloClient;
