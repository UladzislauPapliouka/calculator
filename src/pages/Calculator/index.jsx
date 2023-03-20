import React, { PureComponent } from 'react';
import { ClassDisplay, FuncDisplay } from '@components/Display';
import { ClassHistory, FuncHistory } from '@components/History';
import { ClassKeypad, FuncKeypad } from '@components/Keypad';
import * as PropTypes from 'prop-types';

import CalculatorWrapper from './styled';

const FuncCalculator = ({ displayValue, handleEnterSymbol, history }) => (
  <CalculatorWrapper>
    <FuncDisplay expression={displayValue} />
    <FuncKeypad handleEnterSymbol={handleEnterSymbol} />
    <FuncHistory history={history} />
  </CalculatorWrapper>
);
FuncCalculator.defaultProps = {
  displayValue: '',
  handleEnterSymbol: () => {},
  history: '',
};
FuncCalculator.propTypes = {
  displayValue: PropTypes.string,
  handleEnterSymbol: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.string),
};

class ClassCalculator extends PureComponent {
  render() {
    const { displayValue, handleEnterSymbol, history } = this.props;
    return (
      <CalculatorWrapper>
        <ClassDisplay expression={displayValue} />
        <ClassKeypad handleEnterSymbol={handleEnterSymbol} />
        <ClassHistory history={history} />
      </CalculatorWrapper>
    );
  }
}

ClassCalculator.defaultProps = {
  displayValue: '',
  handleEnterSymbol: () => {},
  history: '',
};
ClassCalculator.propTypes = {
  displayValue: PropTypes.string,
  handleEnterSymbol: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.string),
};
export { ClassCalculator, FuncCalculator };
