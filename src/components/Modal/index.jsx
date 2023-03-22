import React, { useLayoutEffect, useRef } from 'react';
import * as PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { displayBreakpoints } from '@constants/styles/sizes';

import ModalWrapper from './styled';

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
export { ModalCC, ModalFC };
