import React, { PureComponent, useMemo } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { toggleIsHistoryOpen } from '@store/reducers/calculatorSlice';
import * as PropTypes from 'prop-types';

import { HistoryOperation, HistoryWrapper, Title } from './styled';

const HistoryFC = () => {
  const { isOpen, history } = useSelector(({ calculator }) => ({
    isOpen: calculator.isHistoryOpen,
    history: calculator.history,
  }));
  const dispatch = useDispatch();
  const toggleHistory = () => dispatch(toggleIsHistoryOpen());
  const historyList = useMemo(
    () =>
      history.length ? (
        history.map((historyExpression) => (
          <HistoryOperation key={historyExpression}>
            {historyExpression}
          </HistoryOperation>
        ))
      ) : (
        <HistoryOperation>No operation yet...</HistoryOperation>
      ),
    [history.length],
  );
  return (
    <HistoryWrapper>
      <Title onClick={toggleHistory}>
        {isOpen ? 'Hide history' : 'Show history'}
      </Title>
      {isOpen && historyList}
    </HistoryWrapper>
  );
};

class ClassHistoryWithoutStore extends PureComponent {
  render() {
    const { history, isOpen, toggleIsOpen } = this.props;
    const historyList = history.length ? (
      history.map((historyExpression) => (
        <HistoryOperation key={historyExpression}>
          {historyExpression}
        </HistoryOperation>
      ))
    ) : (
      <HistoryOperation>No operation yet...</HistoryOperation>
    );
    return (
      <HistoryWrapper>
        <Title onClick={toggleIsOpen}>
          {isOpen ? 'Hide history' : 'Show history'}
        </Title>
        {isOpen && historyList}
      </HistoryWrapper>
    );
  }
}
ClassHistoryWithoutStore.defaultProps = {
  history: [],
  isOpen: false,
  toggleIsOpen: () => {},
};
ClassHistoryWithoutStore.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
  isOpen: PropTypes.bool,
  toggleIsOpen: PropTypes.func,
};
const HistoryCC = connect(
  ({ calculator }) => ({
    history: calculator.history,
    isOpen: calculator.isHistoryOpen,
  }),
  (dispatch) => ({
    toggleIsOpen: () => dispatch(toggleIsHistoryOpen()),
  }),
)(ClassHistoryWithoutStore);
export { HistoryCC, HistoryFC };
