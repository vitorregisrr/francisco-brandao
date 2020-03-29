import React, {Fragment} from 'react';
import {CSSTransition} from 'react-transition-group';

import './Modal.scss';

const Modal = (props) => {
    return (
        <Fragment>
            <div
                onClick={() => props.setStatus(false)}
                className={`Backdrop ${props.active
                ? 'show'
                : ''}`}></div>
            <CSSTransition
                in={!!props.active}
                timeout={300}
                unmountOnExit={true}
                classNames="CSSTransition--modal">
                <div className="Modal">
                    <div className="Modal__content float">
                        <button
                            className="btn-transparent Modal__close"
                            onClick={() => props.setStatus(false)}>
                            X
                        </button>
                        {props.children}
                    </div>
                </div>
            </CSSTransition>
        </Fragment>
    )
}

export default Modal;