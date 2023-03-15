import React from 'react';
import * as PropTypes from 'prop-types';

import StyledDisplay from './styled';

class Display extends React.Component {
  render() {
    const { value } = this.props;
    return <StyledDisplay>{value}</StyledDisplay>;
  }
}

Display.propTypes = { value: PropTypes.string };
export default Display;
