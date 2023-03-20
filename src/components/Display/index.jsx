import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';

import DisplayWrapper from './styled';

const FuncDisplay = React.memo(({ expression }) => (
  <DisplayWrapper id="calculator-display">{expression}</DisplayWrapper>
));
FuncDisplay.defaultProps = {
  expression: '',
};
FuncDisplay.propTypes = {
  expression: PropTypes.string,
};

class ClassDisplay extends PureComponent {
  render() {
    const { expression } = this.props;
    return (
      <DisplayWrapper id="calculator-display">{expression}</DisplayWrapper>
    );
  }
}
ClassDisplay.defaultProps = { expression: '' };
ClassDisplay.propTypes = { expression: PropTypes.string };

export { ClassDisplay, FuncDisplay };
