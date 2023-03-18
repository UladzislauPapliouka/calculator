import React from 'react';
import PropTypes from 'prop-types';

import DisplayWrapper from './styled';

const Display = ({ value }) => (
  <DisplayWrapper id="calculator-display">{value}</DisplayWrapper>
);
Display.defaultProps = {
  value: '',
};
Display.propTypes = {
  value: PropTypes.string,
};
export default Display;
