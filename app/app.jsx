import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import styles from './styles';

const App = ({ md, className }) => (
  <Col md={md} className={className}>
    Reac App Boilerplate
  </Col>
);

App.defaultProps = {
  md: 12,
};

App.propTypes = {
  md: PropTypes.number,
  className: PropTypes.string,
};

export default styled(App)`
  ${styles};
`;
