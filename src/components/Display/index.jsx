import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import { BiHistory } from 'react-icons/bi';
import { connect, useDispatch } from 'react-redux';

import { toggleIsHistoryOpen } from '@store/reducers/calculatorSlice';

import {
  DisplayWrapper,
  ExpressionSpan,
  LastExpressionSpan,
  ToggleHistoryIcon,
} from './styled';

const DisplayFC = React.memo(({ expression, lastExpression }) => {
  const dispatch = useDispatch();
  const toggleHistory = () => dispatch(toggleIsHistoryOpen());

  return (
    <DisplayWrapper data-cy="calculator-display">
      <ToggleHistoryIcon onClick={toggleHistory}>
        <BiHistory />
      </ToggleHistoryIcon>
      <LastExpressionSpan>{lastExpression}</LastExpressionSpan>
      <ExpressionSpan>{expression}</ExpressionSpan>
    </DisplayWrapper>
  );
});

DisplayFC.defaultProps = {
  expression: '',
  lastExpression: '',
};
DisplayFC.propTypes = {
  expression: PropTypes.string,
  lastExpression: PropTypes.string,
};

class DisplayCCWithoutStore extends PureComponent {
  render() {
    const { expression, lastExpression, toggleHistory } = this.props;

    return (
      <DisplayWrapper data-cy="calculator-display">
        <ToggleHistoryIcon onClick={toggleHistory}>
          <BiHistory />
        </ToggleHistoryIcon>
        <LastExpressionSpan>{lastExpression}</LastExpressionSpan>
        <ExpressionSpan>{expression}</ExpressionSpan>
      </DisplayWrapper>
    );
  }
}
DisplayCCWithoutStore.defaultProps = {
  expression: '',
  lastExpression: '',
};
DisplayCCWithoutStore.propTypes = {
  expression: PropTypes.string,
  lastExpression: PropTypes.string,
};
const DisplayCC = connect(
  () => {},
  (dispatch) => ({
    toggleHistory() {
      dispatch(toggleIsHistoryOpen());
    },
  }),
)(DisplayCCWithoutStore);

export { DisplayCC, DisplayFC };
