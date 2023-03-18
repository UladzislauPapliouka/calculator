import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';

import DisplayWrapper from './styled';

class Display extends PureComponent {
  render() {
    const { value } = this.props;
    return <DisplayWrapper id="calculator-display">{value}</DisplayWrapper>;
  }
}
Display.defaultProps = { value: '' };
Display.propTypes = { value: PropTypes.string };
export default Display;
