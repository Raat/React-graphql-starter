import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MaterialThemeWrapper = ({ children }) => (
  <MuiThemeProvider>
    {children}
  </MuiThemeProvider>
);

MaterialThemeWrapper.propTypes = {
  children: PropTypes.node,
};

export default MaterialThemeWrapper;
