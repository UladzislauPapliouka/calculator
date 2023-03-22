import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';

import { DisplayCC, DisplayFC } from '@components/Display';
import { HistoryCC, HistoryFC } from '@components/History';
import { KeypadCC, KeypadFC } from '@components/Keypad';

import CalculatorWrapper from './styled';

const CalculatorFC = ({
  displayValue,
  handleEnterSymbol,
  lastExpression,
  isHistoryOpen,
}) => (
  <CalculatorWrapper isHistoryOpen={isHistoryOpen}>
    <DisplayFC expression={displayValue} lastExpression={lastExpression} />
    <KeypadFC handleEnterSymbol={handleEnterSymbol} />
    {isHistoryOpen && <HistoryFC />}
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
    const { displayValue, handleEnterSymbol, lastExpression, isHistoryOpen } =
      this.props;

    return (
      <CalculatorWrapper isHistoryOpen={isHistoryOpen}>
        <DisplayCC expression={displayValue} lastExpression={lastExpression} />
        <KeypadCC handleEnterSymbol={handleEnterSymbol} />
        {isHistoryOpen && <HistoryCC />}
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
