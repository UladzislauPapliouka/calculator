import React, { useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { displayBreakpoints } from '@constants/styles/sizes';
import * as PropTypes from 'prop-types';

import ModalWrapper from './styled';

const ModalFC = React.memo(({ children, handleClose }) => {
  const backRef = useRef();
  const onBackgroundClickHandler = (e) => {
    if (backRef.current === e.target) {
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

class ModalCC extends React.Component {
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

ModalCC.defaultProps = {
  children: () => {},
  handleClose: () => {},
};
ModalCC.propTypes = {
  children: PropTypes.func,
  handleClose: PropTypes.func,
};
export { ModalCC, ModalFC };
