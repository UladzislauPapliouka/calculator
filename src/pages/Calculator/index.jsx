import React, { PureComponent } from 'react';
import { DisplayCC, DisplayFC } from '@components/Display';
import { HistoryCC, HistoryFC } from '@components/History';
import { KeypadCC, KeypadFC } from '@components/Keypad';
import * as PropTypes from 'prop-types';

import CalculatorWrapper from './styled';

const CalculatorFC = ({ displayValue, handleEnterSymbol }) => (
  <CalculatorWrapper>
    <DisplayFC expression={displayValue} />
    <KeypadFC handleEnterSymbol={handleEnterSymbol} />
    <HistoryFC />
  </CalculatorWrapper>
);
CalculatorFC.defaultProps = {
  displayValue: '',
  handleEnterSymbol: () => {},
};
CalculatorFC.propTypes = {
  displayValue: PropTypes.string,
  handleEnterSymbol: PropTypes.func,
};

class CalculatorCC extends PureComponent {
  render() {
    const { displayValue, handleEnterSymbol } = this.props;
    return (
      <CalculatorWrapper>
        <DisplayCC expression={displayValue} />
        <KeypadCC handleEnterSymbol={handleEnterSymbol} />
        <HistoryCC />
      </CalculatorWrapper>
    );
  }
}

CalculatorCC.defaultProps = {
  displayValue: '',
  handleEnterSymbol: () => {},
};
CalculatorCC.propTypes = {
  displayValue: PropTypes.string,
  handleEnterSymbol: PropTypes.func,
};
export { CalculatorCC, CalculatorFC };
