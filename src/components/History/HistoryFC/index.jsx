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
      <Title>History</Title>
      {historyList}
    </HistoryWrapper>
  );
};

export default HistoryFC;
