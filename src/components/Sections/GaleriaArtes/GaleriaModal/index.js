import React from 'react'
import Slick from 'react-slick'

const GaleriaModal = () => {
    return(
        <aside className="GaleriaModal">
            <div className="GaleriaModal__content">
                <Slick>
                    <article className="GaleriaModal__item">
                        <img className="GaleriaModal__item-img" />
                        <h4 className="GaleriaModal__item-nome">Nome de Obra, 2012</h4>
                        <h5 className="GaleriaModal__item-autor">Nome do Autor</h5>
                        <hr className="GaleriaModal__item-line" />
                        <p className="GaleriaModal__item-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus tempora odit saepe aliquid a cupiditate vitae, voluptatem ut assumenda qui.</p>
                    </article>
                </Slick>
            </div>
        </aside>
    )
}

export default GaleriaModal