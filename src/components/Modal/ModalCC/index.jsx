import React from 'react';
import * as PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import ModalWrapper from '@components/Modal/styled';

class ModalCC extends React.Component {
  constructor(props) {
    super(props);
    this.backRef = React.createRef(null);
  }

  onBackgroundClickHandler = ({ target }) => {
    const { handleClose } = this.props;

    if (this.backRef.current === target) {
      handleClose();
    }
  };

  render() {
    const { children } = this.props;
    const { onBackgroundClickHandler } = this;
    const modalContainer = (
      <ModalWrapper
        ref={this.backRef}
        onClick={onBackgroundClickHandler}
        onKeyDown={onBackgroundClickHandler}
      >
        {children}
      </ModalWrapper>
    );

    return ReactDOM.createPortal(
      modalContainer,
      document.getElementById('modalRoot'),
    );
  }
}

ModalCC.defaultProps = {
  children: () => {},
  handleClose: () => {},
};
ModalCC.propTypes = {
  children: PropTypes.func,
  handleClose: PropTypes.func,
};
export default ModalCC;
