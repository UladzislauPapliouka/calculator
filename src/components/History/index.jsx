import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';

import { HistoryOperation, HistoryWrapper, Title } from './styled';

const FuncHistory = ({ history }) => (
  <HistoryWrapper>
    <Title>History</Title>
    {history.map((his) => (
      <HistoryOperation key={his}>{his}</HistoryOperation>
    ))}
  </HistoryWrapper>
);
FuncHistory.defaultProps = { history: [] };
FuncHistory.propTypes = { history: PropTypes.arrayOf(PropTypes.string) };

class ClassHistory extends PureComponent {
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
ClassHistory.defaultProps = { history: [] };
ClassHistory.propTypes = { history: PropTypes.arrayOf(PropTypes.string) };
export { ClassHistory, FuncHistory };
