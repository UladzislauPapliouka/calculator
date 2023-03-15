import React from 'react';
import * as PropTypes from 'prop-types';

import { HistoryOperation, StyledH2, StyledHistory } from './styled';

const History = ({ history }) => (
  <StyledHistory>
    <StyledH2>History</StyledH2>
    {history.map((his) => (
      <HistoryOperation key={his}>{his}</HistoryOperation>
    ))}
  </StyledHistory>
);
History.defaultProps = { history: [] };
History.propTypes = { history: PropTypes.arrayOf(PropTypes.string) };

export default History;
