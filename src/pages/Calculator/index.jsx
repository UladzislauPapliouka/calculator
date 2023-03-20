import React, { PureComponent } from 'react';
import { DisplayCC, DisplayFC } from '@components/Display';
import { HistoryCC, HistoryFC } from '@components/History';
import { KeypadCC, KeypadFC } from '@components/Keypad';
import * as PropTypes from 'prop-types';

import CalculatorWrapper from './styled';

const CalculatorFC = ({ displayValue, handleEnterSymbol, lastExpression }) => (
  <CalculatorWrapper>
    <DisplayFC expression={displayValue} lastExpression={lastExpression} />
    <KeypadFC handleEnterSymbol={handleEnterSymbol} />
    <HistoryFC />
  </CalculatorWrapper>
);
CalculatorFC.defaultProps = {
  displayValue: '',
  handleEnterSymbol: () => {},
  lastExpression: '',
};
CalculatorFC.propTypes = {
  displayValue: PropTypes.string,
  lastExpression: PropTypes.string,
  handleEnterSymbol: PropTypes.func,
};

class CalculatorCC extends PureComponent {
  render() {
    const { displayValue, handleEnterSymbol, lastExpression } = this.props;
    return (
      <CalculatorWrapper>
        <DisplayCC expression={displayValue} lastExpression={lastExpression} />
        <KeypadCC handleEnterSymbol={handleEnterSymbol} />
        <HistoryCC />
      </CalculatorWrapper>
    );
  }
}

CalculatorCC.defaultProps = {
  displayValue: '',
  handleEnterSymbol: () => {},
  lastExpression: '',
};
CalculatorCC.propTypes = {
  displayValue: PropTypes.string,
  lastExpression: PropTypes.string,
  handleEnterSymbol: PropTypes.func,
};
export { CalculatorCC, CalculatorFC };
