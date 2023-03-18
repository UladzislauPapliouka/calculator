import React from 'react';
import { FuncDisplay } from '@components/Display';
import { FuncHistory } from '@components/History';
import { FuncKeypad } from '@components/Keypad';
import * as PropTypes from 'prop-types';

import CalculatorWrapper from './styled';

const Calculator = ({ displayValue, handleEnterSymbol, history }) => (
  <CalculatorWrapper>
    <FuncDisplay value={displayValue} />
    <FuncKeypad handleEnterSymbol={handleEnterSymbol} />
    <FuncHistory history={history} />
  </CalculatorWrapper>
);
Calculator.defaultProps = {
  displayValue: '',
  handleEnterSymbol: () => {},
  history: '',
};
Calculator.propTypes = {
  displayValue: PropTypes.string,
  handleEnterSymbol: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.string),
};

export default Calculator;
