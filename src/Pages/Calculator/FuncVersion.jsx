import React from 'react';
import { FuncDisplay } from '@components/Display';
import { FuncHistory } from '@components/History';
import { FuncKeypad } from '@components/Keypad';

import StyleCalculator from './styled';

const Calculator = ({ displayValue, onEnterSymbol, history }) => (
  <StyleCalculator>
    <FuncDisplay value={displayValue} />
    <FuncKeypad onEnterSymbol={onEnterSymbol} />
    <FuncHistory history={history} />
  </StyleCalculator>
);

export default Calculator;
