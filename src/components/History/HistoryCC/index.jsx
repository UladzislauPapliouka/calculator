import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  HistoryOperation,
  HistoryWrapper,
  Title,
} from '@components/History/styled';

class ClassHistoryWithoutStore extends PureComponent {
  render() {
    const { history } = this.props;
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
        <Title>History</Title>
        {historyList}
      </HistoryWrapper>
    );
  }
}
ClassHistoryWithoutStore.defaultProps = {
  history: [],
};
ClassHistoryWithoutStore.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
};
const HistoryCC = connect(({ calculator }) => ({
  history: calculator.history,
}))(ClassHistoryWithoutStore);

export default HistoryCC;