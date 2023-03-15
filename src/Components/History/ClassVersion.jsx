import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';

import { HistoryOperation, StyledH2, StyledHistory } from './styled';

class History extends PureComponent {
  render() {
    const { history } = this.props;
    return (
      <StyledHistory>
        <StyledH2>History</StyledH2>
        {history.map((his) => (
          <HistoryOperation key={his}>{his}</HistoryOperation>
        ))}
      </StyledHistory>
    );
  }
}

History.propTypes = { history: PropTypes.arrayOf(PropTypes.string) };
export default History;
