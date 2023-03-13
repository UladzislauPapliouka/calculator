import React, { useRef} from "react";
import ReactDOM from "react-dom";
import * as PropTypes from "prop-types";


export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.backRef = React.createRef(null)
    }
    render() {
        let {children, closeModal} = this.props;
        const onBackgroundClickHandler = (e) => {
            if (this.backRef.current === e.target) {
                closeModal();
            }
        };
        const modalContainer = <div
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(80,80,80,0.61)',
            }}
            ref={this.backRef}
            onClick={onBackgroundClickHandler}
        >

            {children}
        </div>
        return ReactDOM.createPortal(modalContainer, document.getElementById('modalRoot'))
    }
}

Modal.propTypes = {
    children: PropTypes.any,
    closeModal: PropTypes.any
}