import React, { useLayoutEffect, useRef } from 'react';
import * as PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import ModalWrapper from '@components/Modal/styled';
import { displayBreakpoints } from '@constants/styles/sizes';

const ModalFC = React.memo(({ children, handleClose }) => {
  const backRef = useRef();
  const onBackgroundClickHandler = ({ target }) => {
    if (backRef.current === target) {
      handleClose();
    }
  };
  const closeModalWithResize = () => {
    if (window.innerWidth >= displayBreakpoints.md) {
      handleClose();
    }
  };

  useLayoutEffect(() => {
    window.onresize = closeModalWithResize;
    return () => {
      window.onresize = () => {};
    };
  }, []);
  const modalContainer = (
    <ModalWrapper
      ref={backRef}
      onKeyDown={onBackgroundClickHandler}
      onClick={onBackgroundClickHandler}
    >
      {children}
    </ModalWrapper>
  );

  return ReactDOM.createPortal(
    modalContainer,
    document.getElementById('modalRoot'),
  );
});

ModalFC.defaultProps = {
  children: () => {},
  handleClose: () => {},
};
ModalFC.propTypes = {
  children: PropTypes.func,
  handleClose: PropTypes.func,
};

export default ModalFC;
