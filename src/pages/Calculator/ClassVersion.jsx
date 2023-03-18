import React, { PureComponent } from 'react';
import { ClassDisplay } from '@components/Display';
import { ClassHistory } from '@components/History';
import { ClassKeypad } from '@components/Keypad';
import * as PropTypes from 'prop-types';

import CalculatorWrapper from './styled';

class Calculator extends PureComponent {
  render() {
    const { displayValue, handleEnterSymbol, history } = this.props;
    return (
      <CalculatorWrapper>
        <ClassDisplay value={displayValue} />
        <ClassKeypad handleEnterSymbol={handleEnterSymbol} />
        <ClassHistory history={history} />
      </CalculatorWrapper>
    );
  }
}

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
