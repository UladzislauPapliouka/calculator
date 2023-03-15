import React from 'react';
import { FuncDisplay } from '@components/Display';
import { FuncHistory } from '@components/History';
import { FuncKeypad } from '@components/Keypad';
import * as PropTypes from 'prop-types';

import StyleCalculator from './styled';

const Calculator = ({ displayValue, onEnterSymbol, history }) => (
  <StyleCalculator>
    <FuncDisplay value={displayValue} />
    <FuncKeypad onEnterSymbol={onEnterSymbol} />
    <FuncHistory history={history} />
  </StyleCalculator>
);
Calculator.defaultProps = {
  displayValue: '',
  onEnterSymbol: () => {},
  history: '',
};
Calculator.propTypes = {
  displayValue: PropTypes.string,
  onEnterSymbol: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.string),
};

export default Calculator;
