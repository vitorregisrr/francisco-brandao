import React from 'react'
import {Link} from 'react-router-dom'
import Slick from 'react-slick'

import HistoriaSlider from './HistoriaSlider'

import './styles.scss'

const MainSlider = ({slickRef}) => {
    const slickSettings = {}

    const items = [
        {
            key: 'historia',
            background: '/img/home/historia.png',
            title: 'História',
            subtitle: 'Conheça a história de Chiquinho Brandão',
            link: '/historia'
        },
        {
            key: 'empreendedorismo',
            background: '/img/home/empreendedorismo.png',
            title: 'Empreendedorismo',
            subtitle: ' Desde início até a FSB',
            link: '/empreendedorismo'
        },
        {
            key: 'hipismo',
            background: '/img/home/hipismo.png',
            title: 'Hipismo',
            subtitle: 'A relação com os cavalos dede a infância',
            link: '/hipismo'
        },
        {
            key: 'colecao',
            background: '/img/home/colecao.png',
            title: 'Coleção de arte',
            subtitle: 'Veja mais de 300 obras no acervo',
            link: '/colecao'
        },
        {
            key: 'meio-ambiente',
            background: '/img/home/meio-ambiente.png',
            title: 'Meio Ambiente',
            subtitle: 'O Sítio Santo Antônio e a Natureza',
            link: '/meio-ambiente'
        },
    ]
    return (
        <Slick ref={slickRef} {...slickSettings}>

            {/* Primeiro item */}
            <HistoriaSlider />

            {/* Outros items */}
            {items.map((i) => (
                 <section
                 key={i.key}
                 class="FullSlider__item"
                 style={{
                 backgroundImage: i.background}}>
                 <div className="FullSlider__item-caption">
                     <h1 className="FullSlider__item-title">
                         .  <span>i.title</span>
                     </h1>
                     <hr className="FullSlider__item-divisor"/>
                     <h2 className="FullSlider__item-subtitle">
                        <i className="subtitle"></i>
                     </h2>
                     <Link className="FullSlider__item-arrow" to={i.link}/>
                 </div>
             </section>
            ))}
           
        </Slick>
    )
}

export default MainSlider