import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/withData';
import Head from './services/helmet/head';
import Providers from './Providers';

const App = () => (
  <Providers>
    <div>
      <Head />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  </Providers>
);

export default App;
