import React from 'react';
import propTypes from 'prop-types';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

const DefaultLayout = ({ children }) => (
  <div style={{ maxWidth: '600px', margin: '100px auto' }}>
    <Header />
    {children}
    <Footer />
  </div>
);

DefaultLayout.propTypes = {
  children: propTypes.node,
};

export default DefaultLayout;
