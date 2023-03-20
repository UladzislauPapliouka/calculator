import React, { PureComponent } from 'react';
import { DisplayCC, DisplayFC } from '@components/Display';
import { HistoryCC, HistoryFC } from '@components/History';
import { KeypadCC, KeypadFC } from '@components/Keypad';
import * as PropTypes from 'prop-types';

import CalculatorWrapper from './styled';

const CalculatorFC = ({ displayValue, handleEnterSymbol, history }) => (
  <CalculatorWrapper>
    <DisplayFC expression={displayValue} />
    <KeypadFC handleEnterSymbol={handleEnterSymbol} />
    <HistoryFC history={history} />
  </CalculatorWrapper>
);
CalculatorFC.defaultProps = {
  displayValue: '',
  handleEnterSymbol: () => {},
  history: '',
};
CalculatorFC.propTypes = {
  displayValue: PropTypes.string,
  handleEnterSymbol: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.string),
};

class CalculatorCC extends PureComponent {
  render() {
    const { displayValue, handleEnterSymbol, history } = this.props;
    return (
      <CalculatorWrapper>
        <DisplayCC expression={displayValue} />
        <KeypadCC handleEnterSymbol={handleEnterSymbol} />
        <HistoryCC history={history} />
      </CalculatorWrapper>
    );
  }
}

CalculatorCC.defaultProps = {
  displayValue: '',
  handleEnterSymbol: () => {},
  history: '',
};
CalculatorCC.propTypes = {
  displayValue: PropTypes.string,
  handleEnterSymbol: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.string),
};
export { CalculatorCC, CalculatorFC };
