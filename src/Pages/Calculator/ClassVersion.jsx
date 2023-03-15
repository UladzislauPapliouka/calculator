import React, { PureComponent } from 'react';
import { ClassDisplay } from '@components/Display';
import { ClassHistory } from '@components/History';
import { ClassKeypad } from '@components/Keypad';
import * as PropTypes from 'prop-types';

import StyleCalculator from './styled';

class Calculator extends PureComponent {
  render() {
    const { displayValue, onEnterSymbol, history } = this.props;
    return (
      <StyleCalculator>
        <ClassDisplay value={displayValue} />
        <ClassKeypad onEnterSymbol={onEnterSymbol} />
        <ClassHistory history={history} />
      </StyleCalculator>
    );
  }
}

Calculator.propTypes = {
  displayValue: PropTypes.string,
  onEnterSymbol: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.string),
};

export default Calculator;
