import React, {useRef, useEffect, useState} from 'react'
import $ from 'jquery'
import Slick from 'react-slick'

import './styles.scss'

const GaleriaModal = ({currentItem, items, closeModal, visible}) => {
    const slickSettings = {
        dots: false,
        nav: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1400,
        centerPadding: 0,
        centerMode: true
    }
    const slickRef = useRef(false);

    useEffect(() => {
       
    }, [currentItem])

    return (
        <aside className="GaleriaModal" data-visible={visible}>
            <button
                onClick={closeModal}
                className="GaleriaModal__close"
                title="Fechar modal"></button>
            <div className="GaleriaModal__content">
               
            </div>
        </aside>
    )
}

export default GaleriaModal