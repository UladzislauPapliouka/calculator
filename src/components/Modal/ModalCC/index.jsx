import React from 'react';
import * as PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import ModalWrapper from '@components/Modal/styled';
import { displayBreakpoints } from '@constants/styles/sizes';

class ModalCC extends React.Component {
  constructor(props) {
    super(props);
    this.backRef = React.createRef(null);
  }

  componentDidMount() {
    window.onresize = this.closeModalWithResize;
  }

  componentWillUnmount() {
    window.onresize = () => {};
  }

  onBackgroundClickHandler = ({ target }) => {
    const { handleClose } = this.props;

    if (this.backRef.current === target) {
      handleClose();
    }
  };

  closeModalWithResize = () => {
    const { handleClose } = this.props;

    if (window.innerWidth >= displayBreakpoints.md) {
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
