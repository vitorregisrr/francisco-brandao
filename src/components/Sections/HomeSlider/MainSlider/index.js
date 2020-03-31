import React from 'react'
import {Link} from 'react-router-dom'
import Slick from 'react-slick'

import HistoriaSlider from '../HistoriaSlider'

import './styles.scss'

const MainSlider = ({slickRef, setCurrentIndex}) => {
    const slickSettings = {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        cssEase: 'cubic-bezier(.8,.42,.33,1)',
        speed: 1400,
        centerPadding: 0,
        waitForAnimate: false,
        vertical: true,
        draggable: false,
        beforeChange: (old, curr) => setCurrentIndex(curr)
    }

    const items = [
        {
            key: 'historia',
            background: 'static/images/home/historia.png',
            title: 'História',
            subtitle: 'Conheça a história de Chiquinho Brandão',
            link: '/historia'
        }, {
            key: 'empreendedorismo',
            background: '/src/assets/images/home/empreendedorismo.png',
            title: 'Empreendedorismo',
            subtitle: 'Desde início até a FSB',
            link: '/empreendedorismo'
        }, {
            key: 'hipismo',
            background: '/assets/images/home/hipismo.png',
            title: 'Hipismo',
            subtitle: 'A relação com os cavalos dede a infância',
            link: '/hipismo'
        }, {
            key: 'colecao',
            background: '/assets/images/home/colecao.png',
            title: 'Coleção de arte',
            subtitle: 'Veja mais de 300 obras no acervo',
            link: '/colecao'
        }, {
            key: 'meio-ambiente',
            background: '/assets/images/home/meio-ambiente.png',
            title: 'Meio Ambiente',
            subtitle: 'O Sítio Santo Antônio e a Natureza',
            link: '/meio-ambiente'
        }
    ]

    return (
        <Slick ref={slickRef} {...slickSettings}>

            {/* Primeiro item */}
            <HistoriaSlider goFirst={true}/>
            
            {/* Outros items */}
            {items.map((i) => (
                <section key={i.key} className="MainSlider__item">
                    <div
                        className={`MainSlider__item-bg ${i.key}`}
                        // style={{backgroundImage: `url(${i.background}})`}}
                        ></div>
                    <div className="MainSlider__item-caption">
                        <h1 className="MainSlider__item-title">
                            <span>.  </span>
                            <span>{i.title}</span>
                        </h1>
                        <hr className="MainSlider__item-divisor"/>
                        <h2 className="MainSlider__item-subtitle">
                            <i className="subtitle"></i>
                        </h2>
                        <Link className="MainSlider__item-arrow" to={i.link}/>
                    </div>
                </section>
            ))}

        </Slick>
    )
}

export default MainSlider