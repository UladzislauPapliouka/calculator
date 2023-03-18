import React from 'react';
import * as PropTypes from 'prop-types';

import { HistoryOperation, HistoryWrapper, Title } from './styled';

const History = ({ history }) => (
  <HistoryWrapper>
    <Title>History</Title>
    {history.map((his) => (
      <HistoryOperation key={his}>{his}</HistoryOperation>
    ))}
  </HistoryWrapper>
);
History.defaultProps = { history: [] };
History.propTypes = { history: PropTypes.arrayOf(PropTypes.string) };

export default History;
