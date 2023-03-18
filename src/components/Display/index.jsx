import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';

import DisplayWrapper from './styled';

const FuncDisplay = ({ value }) => (
  <DisplayWrapper id="calculator-display">{value}</DisplayWrapper>
);
FuncDisplay.defaultProps = {
  value: '',
};
FuncDisplay.propTypes = {
  value: PropTypes.string,
};

class ClassDisplay extends PureComponent {
  render() {
    const { value } = this.props;
    return <DisplayWrapper id="calculator-display">{value}</DisplayWrapper>;
  }
}
ClassDisplay.defaultProps = { value: '' };
ClassDisplay.propTypes = { value: PropTypes.string };

export { ClassDisplay, FuncDisplay };
