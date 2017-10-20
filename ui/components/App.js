import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloProvider from '../utils/apollo/provider';
import './sass.scss';
import Homepage from './pages/homepage/homepage';
import Head from './seo/head';

const App = () => (
  <ApolloProvider>
    <div>
      <Head />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  </ApolloProvider>
);

export default App;
