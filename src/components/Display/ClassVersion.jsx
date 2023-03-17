import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';

import StyledDisplay from './styled';

class Display extends PureComponent {
  render() {
    const { value } = this.props;
    return <StyledDisplay id="calculator-display">{value}</StyledDisplay>;
  }
}
Display.defaultProps = { value: '' };
Display.propTypes = { value: PropTypes.string };
export default Display;
