import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';

import DisplayWrapper from './styled';

const DisplayFC = React.memo(({ expression }) => (
  <DisplayWrapper data-cy="calculator-display">{expression}</DisplayWrapper>
));
DisplayFC.defaultProps = {
  expression: '',
};
DisplayFC.propTypes = {
  expression: PropTypes.string,
};

class DisplayCC extends PureComponent {
  render() {
    const { expression } = this.props;
    return (
      <DisplayWrapper data-cy="calculator-display">{expression}</DisplayWrapper>
    );
  }
}
DisplayCC.defaultProps = { expression: '' };
DisplayCC.propTypes = { expression: PropTypes.string };

export { DisplayCC, DisplayFC };
