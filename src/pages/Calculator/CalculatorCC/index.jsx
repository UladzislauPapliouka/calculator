import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { DisplayCC } from '@components/Display';
import { HistoryCC } from '@components/History';
import { KeypadCC } from '@components/Keypad';
import CalculatorWrapper from '@pages/Calculator/styled';
import { enterSymbol } from '@store/reducers/calculatorSlice';

class CalculatorCCWithoutStore extends PureComponent {
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

const CalculatorCC = connect(
  (state) => ({
    displayValue: state.calculator.expression,
    lastExpression: state.calculator.lastExpression,
    isHistoryOpen: state.calculator.isHistoryOpen,
  }),
  (dispatch) => ({
    handleEnterSymbol: (symbol) => dispatch(enterSymbol({ symbol })),
  }),
)(CalculatorCCWithoutStore);

export default CalculatorCC;
