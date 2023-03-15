import React from 'react';
import ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.backRef = React.createRef(null);
  }

  render() {
    const { children, closeModal } = this.props;
    const onBackgroundClickHandler = (e) => {
      if (this.backRef.current === e.target) {
        closeModal();
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
        ref={this.backRef}
        onClick={onBackgroundClickHandler}
        onKeyDown={onBackgroundClickHandler}
      >
        {children}
      </div>
    );
    return ReactDOM.createPortal(
      modalContainer,
      document.getElementById('modalRoot'),
    );
  }
}

Modal.defaultProps = {
  children: () => {},
  closeModal: () => {},
};
Modal.propTypes = {
  children: PropTypes.func,
  closeModal: PropTypes.func,
};
export default Modal;
