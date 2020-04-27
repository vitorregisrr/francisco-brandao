import React from 'react'
import Slick from 'react-slick'

import './styles.scss'

const GaleriaModal = ({currentItem, items, close, visible}) => {
    const slickSettings = {
        dots: false,
        nav: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <aside className="GaleriaModal" data-visible={visible}>
            <div className="GaleriaModal__content">
                <Slick {...slickSettings}>
                    <article className="GaleriaModal__item">
                        <img className="GaleriaModal__item-img"/>
                        <h4 className="GaleriaModal__item-nome">Nome de Obra, 2012</h4>
                        <h5 className="GaleriaModal__item-autor">Nome do Autor</h5>
                        <hr className="GaleriaModal__item-line"/>
                        <p className="GaleriaModal__item-desc">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusamus tempora odit saepe aliquid a cupiditate vitae,
                            voluptatem ut assumenda qui.</p>
                    </article>
                    <article className="GaleriaModal__item">
                        <img className="GaleriaModal__item-img"/>
                        <h4 className="GaleriaModal__item-nome">Nome de Obra, 2012</h4>
                        <h5 className="GaleriaModal__item-autor">Nome do Autor</h5>
                        <hr className="GaleriaModal__item-line"/>
                        <p className="GaleriaModal__item-desc">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusamus tempora odit saepe aliquid a cupiditate vitae,
                            voluptatem ut assumenda qui.</p>
                    </article>
                </Slick>
            </div>
        </aside>
    )
}

export default GaleriaModal