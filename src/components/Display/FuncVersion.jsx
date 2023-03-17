import React from 'react';
import PropTypes from 'prop-types';

import StyledDisplay from './styled';

const Display = ({ value }) => (
  <StyledDisplay id="calculator-display">{value}</StyledDisplay>
);
Display.defaultProps = {
  value: '',
};
Display.propTypes = {
  value: PropTypes.string,
};
export default Display;
