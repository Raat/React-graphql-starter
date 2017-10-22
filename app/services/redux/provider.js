import React from 'react';
import Provider from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';

const Root = ({ children }) => (
  <div>
    <Provider store={store}>
      {children}
    </div>
  </div>
);

Root.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Root;
