import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import { BiHistory } from 'react-icons/bi';
import { connect } from 'react-redux';

import {
  DisplayWrapper,
  ExpressionSpan,
  LastExpressionSpan,
  ToggleHistoryIcon,
} from '@components/Display/styled';
import { toggleIsHistoryOpen } from '@store/reducers/calculatorSlice';

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

export default DisplayCC;
