import React, { PureComponent } from 'react';
import { ClassDisplay } from '@components/Display';
import { ClassHistory } from '@components/History';
import { ClassKeypad } from '@components/Keypad';
import * as PropTypes from 'prop-types';

import StyleCalculator from './styled';

class Calculator extends PureComponent {
  render() {
    const { displayValue, handleEnterSymbol, history } = this.props;
    return (
      <StyleCalculator>
        <ClassDisplay value={displayValue} />
        <ClassKeypad handleEnterSymbol={handleEnterSymbol} />
        <ClassHistory history={history} />
      </StyleCalculator>
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
