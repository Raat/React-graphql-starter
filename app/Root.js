import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloProvider from './services/apollo/provider';
import HomepageWithData from './pages/homepage/withData';
import Head from './services/helmet/head';

const App = () => (
  <ApolloProvider>
    <div>
      <Head />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomepageWithData} />
        </Switch>
      </BrowserRouter>
    </div>
  </ApolloProvider>
);

export default App;
