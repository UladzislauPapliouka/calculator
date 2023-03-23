import React, { PureComponent } from 'react';
import CalculatorWrapper from '@pages/Calculator/styled';
import { DisplayCC } from '@components/Display';
import { KeypadCC } from '@components/Keypad';
import { HistoryCC } from '@components/History';
import * as PropTypes from 'prop-types';

class CalculatorCC extends PureComponent {
  render() {
    const { displayValue, handleEnterSymbol, lastExpression, isHistoryOpen } =
      this.props;

    return (
      <CalculatorWrapper isHistoryOpen={isHistoryOpen}>
        <DisplayCC expression={displayValue} lastExpression={lastExpression} />
        <KeypadCC handleEnterSymbol={handleEnterSymbol} />
        {isHistoryOpen && <HistoryCC />}
      </CalculatorWrapper>
    );
  }
}

CalculatorCC.defaultProps = {
  displayValue: '',
  handleEnterSymbol: () => {},
  lastExpression: '',
};
CalculatorCC.propTypes = {
  displayValue: PropTypes.string,
  lastExpression: PropTypes.string,
  handleEnterSymbol: PropTypes.func,
};
export default CalculatorCC