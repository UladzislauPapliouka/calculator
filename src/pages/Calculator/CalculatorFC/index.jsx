import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DisplayFC } from '@components/Display';
import { HistoryFC } from '@components/History';
import { KeypadFC } from '@components/Keypad';
import CalculatorWrapper from '@pages/Calculator/styled';
import { enterSymbol } from '@store/reducers/calculatorSlice';

const CalculatorFC = () => {
  const { displayValue, lastExpression, isHistoryOpen } = useSelector(
    (state) => ({
      displayValue: state.calculator.expression,
      lastExpression: state.calculator.lastExpression,
      isHistoryOpen: state.calculator.isHistoryOpen,
    }),
  );
  const dispatch = useDispatch();
  const handleEnterSymbol = (symbol) => dispatch(enterSymbol({ symbol }));

  return (
    <CalculatorWrapper isHistoryOpen={isHistoryOpen}>
      <DisplayFC expression={displayValue} lastExpression={lastExpression} />
      <KeypadFC handleEnterSymbol={handleEnterSymbol} />
      {isHistoryOpen && <HistoryFC />}
    </CalculatorWrapper>
  );
};

export default CalculatorFC;
