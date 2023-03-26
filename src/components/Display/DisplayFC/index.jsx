import React from 'react';
import * as PropTypes from 'prop-types';
import { BiHistory } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import {
  DisplayWrapper,
  ExpressionSpan,
  LastExpressionSpan,
  ToggleHistoryIcon,
} from '@components/Display/styled';
import { toggleIsHistoryOpen } from '@store/reducers/calculatorSlice';

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
export default DisplayFC;
