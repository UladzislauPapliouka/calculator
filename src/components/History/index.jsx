import React, { PureComponent, useState } from 'react';
import * as PropTypes from 'prop-types';

import { HistoryOperation, HistoryWrapper, Title } from './styled';

const FuncHistory = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHistory = () => setIsOpen(!isOpen);
  const historyList = history.length ? (
    history.map((his) => <HistoryOperation key={his}>{his}</HistoryOperation>)
  ) : (
    <HistoryOperation>No operation yet...</HistoryOperation>
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
FuncHistory.defaultProps = { history: [] };
FuncHistory.propTypes = { history: PropTypes.arrayOf(PropTypes.string) };

class ClassHistory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleHistory = () =>
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));

  render() {
    const { history } = this.props;
    const { isOpen } = this.state;
    const { toggleHistory } = this;
    const historyList = history.length ? (
      history.map((his) => <HistoryOperation key={his}>{his}</HistoryOperation>)
    ) : (
      <HistoryOperation>No operation yet...</HistoryOperation>
    );
    return (
      <HistoryWrapper>
        <Title onClick={toggleHistory}>
          {isOpen ? 'Hide history' : 'Show history'}
        </Title>
        {isOpen && historyList}
      </HistoryWrapper>
    );
  }
}
ClassHistory.defaultProps = { history: [] };
ClassHistory.propTypes = { history: PropTypes.arrayOf(PropTypes.string) };
export { ClassHistory, FuncHistory };
