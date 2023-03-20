import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';

import { DisplayWrapper, ExpressionSpan, LastExpressionSpan } from './styled';

const DisplayFC = React.memo(({ expression, lastExpression }) => (
  <DisplayWrapper data-cy="calculator-display">
    <LastExpressionSpan>{lastExpression}</LastExpressionSpan>
    <ExpressionSpan>{expression}</ExpressionSpan>
  </DisplayWrapper>
));
DisplayFC.defaultProps = {
  expression: '',
  lastExpression: '',
};
DisplayFC.propTypes = {
  expression: PropTypes.string,
  lastExpression: PropTypes.string,
};

class DisplayCC extends PureComponent {
  render() {
    const { expression, lastExpression } = this.props;
    return (
      <DisplayWrapper data-cy="calculator-display">
        <LastExpressionSpan>{lastExpression}</LastExpressionSpan>
        <ExpressionSpan>{expression}</ExpressionSpan>
      </DisplayWrapper>
    );
  }
}
DisplayCC.defaultProps = {
  expression: '',
  lastExpression: '',
};
DisplayCC.propTypes = {
  expression: PropTypes.string,
  lastExpression: PropTypes.string,
};

export { DisplayCC, DisplayFC };
