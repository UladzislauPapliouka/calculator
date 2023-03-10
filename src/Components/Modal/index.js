import React, { useRef} from "react";
import ReactDOM from "react-dom";



export  const Modal = ({children, closeModal}) => {
    const backRef = useRef()
    const onBackgroundClickHandler = (e) => {
        if (backRef.current === e.target) {
            closeModal();
        }
    };
    const modalContainer = <div
        style={{
            height: '100vh',
            width:'100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(80,80,80,0.61)',
        }}
        ref={backRef}
        onClick={onBackgroundClickHandler}
    >

        {children}
    </div>
    return ReactDOM.createPortal(modalContainer,document.getElementById('modalRoot'))
}