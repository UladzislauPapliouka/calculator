import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';

const Modal = ({ children, handleClose }) => {
  const backRef = useRef();
  const onBackgroundClickHandler = (e) => {
    if (backRef.current === e.target) {
      handleClose();
    }
  };
  const modalContainer = (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(80,80,80,0.61)',
      }}
      role="presentation"
      ref={backRef}
      onKeyDown={onBackgroundClickHandler}
      onClick={onBackgroundClickHandler}
    >
      {children}
    </div>
  );
  return ReactDOM.createPortal(
    modalContainer,
    document.getElementById('modalRoot'),
  );
};
Modal.propTypes = {
  children: PropTypes.func,
  handleClose: PropTypes.func,
};

export default Modal;
