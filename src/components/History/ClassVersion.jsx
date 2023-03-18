import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';

import { HistoryOperation, HistoryWrapper, Title } from './styled';

class History extends PureComponent {
  render() {
    const { history } = this.props;
    return (
      <HistoryWrapper>
        <Title>History</Title>
        {history.map((his) => (
          <HistoryOperation key={his}>{his}</HistoryOperation>
        ))}
      </HistoryWrapper>
    );
  }
}
History.defaultProps = { history: [] };
History.propTypes = { history: PropTypes.arrayOf(PropTypes.string) };
export default History;
