import CalculatorWrapper from '@pages/Calculator/styled';
import { DisplayFC } from '@components/Display';
import { KeypadFC } from '@components/Keypad';
import { HistoryFC } from '@components/History';
import * as PropTypes from 'prop-types';
import React from 'react';

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
export default CalculatorFC