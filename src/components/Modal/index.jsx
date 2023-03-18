import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';

import ModalWrapper from './styled';

const FuncModal = ({ children, handleClose }) => {
  const backRef = useRef();
  const onBackgroundClickHandler = (e) => {
    if (backRef.current === e.target) {
      handleClose();
    }
  };
  const modalContainer = (
    <ModalWrapper
      ref={this.backRef}
      onClick={onBackgroundClickHandler}
      onKeyDown={onBackgroundClickHandler}
    >
      ref={backRef}
      onKeyDown={onBackgroundClickHandler}
      onClick={onBackgroundClickHandler}>{children}
    </ModalWrapper>
  );
  return ReactDOM.createPortal(
    modalContainer,
    document.getElementById('modalRoot'),
  );
};
FuncModal.propTypes = {
  children: PropTypes.func,
  handleClose: PropTypes.func,
};

class ClassModal extends React.Component {
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

ClassModal.defaultProps = {
  children: () => {},
  handleClose: () => {},
};
ClassModal.propTypes = {
  children: PropTypes.func,
  handleClose: PropTypes.func,
};
export { ClassModal, FuncModal };
