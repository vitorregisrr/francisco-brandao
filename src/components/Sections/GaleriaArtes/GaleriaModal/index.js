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
        if (currentItem && items) {
            const currentIndex = $(`.slick-slider [data-id="${currentItem}"]`)
                .parent()
                .parent()
                .attr('data-index');
            slickRef
                .current
                .slickGoTo(currentIndex);
        }
    }, [currentItem])

    return (
        <aside className="GaleriaModal" data-visible={visible}>
            <button
                onClick={closeModal}
                className="GaleriaModal__close"
                title="Fechar modal"></button>
            <div className="GaleriaModal__content">
                {items
                    ? <Slick ref={slickRef} {...slickSettings}>
                            {items.map(i => (
                                <article className="GaleriaModal__item" data-id={i.id}>
                                    <img className="GaleriaModal__item-img" src={i.file}/>
                                    <h4 className="GaleriaModal__item-nome">{i.file_desc}</h4>
                                    <h5 className="GaleriaModal__item-autor">{i.file_artista}</h5>

                                    {/* Apenas se houver descrição */}
                                    {/* (i.file_desc2
                                        ? <React.Fragment><hr className="GaleriaModal__item-line"/>
                                                <p className="GaleriaModal__item-desc">{i.file_desc2}</p>
                                            </React.Fragment>
                                    : null */}
                                </article>
                            ))}
                        </Slick>
                    : null}
            </div>
        </aside>
    )
}

export default GaleriaModal