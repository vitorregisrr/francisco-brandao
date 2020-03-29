import React from 'react';

import './Button.scss';

const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={`btn
            ${props.classNames}
            ${props.size ? 'btn-' + props.size : ''}
            ${props.variant ? 'btn-'+props.variant : ''}
            ${props.outline ? '--outline' : ''} `}>
            {props.children}
        </button>
    )
}

export default Button;