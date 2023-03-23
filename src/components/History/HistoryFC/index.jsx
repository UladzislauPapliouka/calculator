import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import {
  HistoryOperation,
  HistoryWrapper,
  Title,
} from '@components/History/styled';

const HistoryFC = () => {
  const { history } = useSelector(({ calculator }) => ({
    history: calculator.history,
  }));
  const historyList = useMemo(
    () =>
      history.map((historyExpression) => (
        <HistoryOperation key={historyExpression}>
          {historyExpression}
        </HistoryOperation>
      )),
    [history.length],
  );

  return (
    <HistoryWrapper>
      <Title>History</Title>
      {history.length ? (
        historyList
      ) : (
        <HistoryOperation>No operation yet...</HistoryOperation>
      )}
    </HistoryWrapper>
  );
};

export default HistoryFC;
