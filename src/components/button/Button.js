import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './Button.styles.css';

/**
 * The only true button.
 */

const StyledButton = styled(({ className, children, onClick }) => (
  <button className={className} style={styles} onClick={onClick}>
    {children}
  </button>
))`
  ${styles};
`;

export default function Button({ onClick, ...props }) {
  return <StyledButton {...props} />;
}

Button.propTypes = {
  /** Button label */
  children: PropTypes.string.isRequired,
  /** The color for the button */
  color: PropTypes.string,
  /** The size of the button */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
};
Button.defaultProps = {
  color: '#333',
  size: 'normal',
  /* eslint-disable no-console */
  onClick: (event) => {
    console.log('You have clicked me!', event.target);
  },
  /* eslint-enable no-console */
};
