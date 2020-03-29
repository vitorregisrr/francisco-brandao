import React from 'react';

import './Spinner.scss';

const Spinner = (props) => {
    return (
        <div
            className={props.classNames}
            style={{
            height: props.fullscreen
                ? '100vh'
                : 'unset',
            width: props.fullscreen
                ? '100vw'
                : 'unset'
        }}>
            <div className={`Spinner color-${props.color}`}></div>
        </div>
    )
}

export default Spinner;