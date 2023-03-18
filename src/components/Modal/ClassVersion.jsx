import React from 'react';
import ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';

import ModalWrapper from './styled';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.backRef = React.createRef(null);
  }

  render() {
    const { children, handleClose } = this.props;
    const onBackgroundClickHandler = (e) => {
      if (this.backRef.current === e.target) {
        handleClose();
      }
    };
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

Modal.defaultProps = {
  children: () => {},
  handleClose: () => {},
};
Modal.propTypes = {
  children: PropTypes.func,
  handleClose: PropTypes.func,
};
export default Modal;
