import React from 'react'

import './styles.scss'

const PageBanner = ({title, background}) => {
    return(
        <header className="PageBanner" style={{backgroundImage: background}}>
            <h2 className="PageBanner__title">{title}</h2>
        </header>
    )
}

export default PageBanner;