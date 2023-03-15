import React from 'react';
import PropTypes from 'prop-types';

import StyledDisplay from './styled';

const Display = ({ value }) => <StyledDisplay>{value}</StyledDisplay>;
Display.propTypes = {
  value: PropTypes.string,
};
export default Display;
