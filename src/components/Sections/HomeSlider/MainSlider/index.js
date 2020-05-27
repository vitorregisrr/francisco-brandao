import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Slick from 'react-slick'

import HistoriaSlider from '../HistoriaSlider'

import './styles.scss'

const MainSlider = ({slickRef, setCurrentIndex, currIndex, hasOverlay, isFirst, data}) => {
    // Estado para desativar temporariamente o navbar enquanto realiza animação
    const [isDesactived, setIsDesactived] = useState(false);
    // Variavel para testar breakpoint menor que 992px
    const [isLGScreen, setIsLGScreen] = useState(window.innerWidth < 992);
    // Varíavel de controle se a ultima mudança foi pra frente ou pra trás
    const [isNext, setIsNext] = useState(false);
    const IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Configuração do slider
    const slickSettings = {
        arrows: false,
        slidesToShow: 1,
        loop: true,
        slidesToScroll: 1,
        centerMode: true,
        cssEase: 'cubic-bezier(.8,.42,.33,1)',
        speed: 1400,
        centerPadding: 0,
        waitForAnimate: false,
        vertical: !isLGScreen,
        draggable: isLGScreen,
        beforeChange: (old, curr) => {
            setCurrentIndex(curr);
            setIsNext(curr > old);
        }
    }

    // Rearquiteturando os dados para os itens secundários do slider
    const itemsData = [
        {
            key: 'historia',
            background: `data:image/png;base64,${data.nav_foto1}`,
            title: data.nav_pagina1,
            subtitle: data.nav_resumo1,
            link: '/historia'
        }, {
            key: 'empreendedorismo',
            background: `data:image/png;base64,${data.nav_foto2}`,
            title: data.nav_pagina2,
            subtitle: data.nav_resumo2,
            link: '/empreendedorismo'
        }, {
            key: 'hipismo',
            background: `data:image/png;base64,${data.nav_foto3}`,
            title: data.nav_pagina3,
            subtitle: data.nav_resumo3,
            link: '/hipismo'
        }, {
            key: 'colecao',
            background: `data:image/png;base64,${data.nav_foto4}`,
            title: data.nav_pagina4,
            subtitle: data.nav_resumo4,
            link: '/colecao'
        }, {
            key: 'meio-ambiente',
            background: `data:image/png;base64,${data.nav_foto5}`,
            title: data.nav_pagina5,
            subtitle: data.nav_resumo5,
            link: '/meio-ambiente'
        }
    ]

    // Rearquiteturando os dados para o componente história
    const historiaData = {
        nomes: [data.titulo, data.titulo2, data.titulo3],
        backgrounds: [`data:image/png;base64,${data.foto1}`, `data:image/png;base64,${data.foto2}`, `data:image/png;base64,${data.foto3}`],
        backgroundsMob: [`data:image/png;base64,${data.foto1_mobile}`, `data:image/png;base64,${data.foto2_mobile}`, `data:image/png;base64,${data.foto3_mobile}`],
        sobrenome: data.titulo4,
        descricao: data.chamada,
    }

    // Desativa temporariamente a navegação mobile
    const desactiveDots = () => {
        // Desactived delay
        setIsDesactived(true);
        setTimeout(() => {
            setIsDesactived(false);
        }, 1600);
    }

    return (
       <React.Fragment>
           {/* Overlay branco usado no mobile */}
           <div className={`overlay ${hasOverlay && isLGScreen ? 'show' : ''}`}></div>
           {/* Título animado do mobile */}
           <h1 className={`MainSlider__mobile-title ${!isFirst ? 'isFirst' : ''}`} onClick={() => slickRef.current.slickGoTo(0)}>Chiquinho <span>Brandão</span></h1>
           {/* Slider */}
            <Slick ref={slickRef} {...slickSettings}>
                {/* Primeiro item (história) */}
                <HistoriaSlider data={historiaData} goFirst={true}/>

                {/* Outros items */}
                {itemsData.map((i) => (
                    <section key={i.key} className="MainSlider__item">
                        <div
                            className={`MainSlider__item-bg ${i.key}`}
                            style={{backgroundImage: `url('${i.background}')`}}></div>
                        <Link className="MainSlider__item-caption" to={i.link}>
                            <h1 className="MainSlider__item-title">
                                <span>.  </span>
                                <span>{i.title}</span>
                            </h1>
                            <hr className={`MainSlider__item-divisor ${isNext ? 'isNext' : ''}`}/>
                            <h2 className="MainSlider__item-subtitle">
                                {i.subtitle}
                            </h2>
                            <Link className="MainSlider__item-arrow" to={i.link}/>
                        </Link>
                    </section>
                ))}
                </Slick>

                {/* Navegação Mobile */}
                <div className={`MainSlider__dots ${isDesactived ? 'desactived' : ''} ${IOS ? 'ios' : ''}`} onClick={desactiveDots}>
                    {[0,1,2,3,4,5,].map(i => (
                        <button title={`Ir para item ${i}`} key={i} className={currIndex === i ? 'active' : ''} onClick={() => slickRef.current.slickGoTo(i)}></button>
                    ))}

                     <button title={`Proximo item`} key={6} className='arrow' onClick={() => slickRef.current.slickNext()}></button>
                </div>
       </React.Fragment>
    )
}

export default MainSlider