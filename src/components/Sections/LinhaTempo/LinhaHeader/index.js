import React from 'react'

import styles from './styles.scss'

const LinhaHeader = ({current, setCurrent}) => {
    return (
        <header className="LinhaHeader">
            <div className="container">
                <div className="LinhaHeader__title">
                    Trajetória
                </div>
                <div className="LinhaHeader__list" data-current={current}>
                    <div className="overlay-line"></div>
                    <button onClick={() => setCurrent(0)} data-active={current > -1}>
                        <span>
                            Origens
                        </span>
                    </button>
                    <button onClick={() => setCurrent(1)} data-active={current > 0}>
                        <span>
                            Infância
                        </span>
                    </button>
                    <button onClick={() => setCurrent(2)} data-active={current > 1}>
                        <span>
                            Infância
                        </span>
                    </button>
                    <button onClick={() => setCurrent(3)} data-active={current > 2}>
                        <span>
                            Vida Adulta
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default LinhaHeader