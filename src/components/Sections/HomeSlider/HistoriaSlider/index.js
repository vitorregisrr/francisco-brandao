import React, {useState, useEffect} from 'react'
import ReactTextTransition from "react-text-transition"

import './style.scss'

const HistoriaSlider = ({data}) => {
    const [currIndex, setCurrIndex] = useState(0);
    const [historiaBg, setHistoriaBg] = useState('assets/images/home/slider-0.png');
    const [isAutomatic, setIsAutomatic] = useState(true);

    const updateState = (index, automatic) => {
        switch (index) {
            case 0:
                setCurrIndex(0);
                setHistoriaBg('assets/images/home/slider-0.png');
            break;

            case 1:
                setCurrIndex(1);
                setHistoriaBg('assets/images/home/slider-1.png');
            break;

            case 2:
                setCurrIndex(2);
                setHistoriaBg('assets/images/home/slider-2.png');
            break
        }

        if(!automatic){
            setIsAutomatic(false);
        }
    }

    useEffect(() => {
        const interval = setInterval( () => {
            if(isAutomatic){
                updateState(currIndex === 2 ? 0 : currIndex+1, true)
            }
        }, 4000);
          return () => clearInterval(interval);
    }, [currIndex]);

    

    return (
        <section className="MainSlider__item" key="historia-slider">
            
            <div className={`MainSlider__item-bg historia-slider item-0 ${currIndex === 0 ? 'active' : ''}`}  style={{backgroundImage: `url(${data.backgrounds[0]})`}}></div>
            <div className={`MainSlider__item-bg historia-slider item-1 ${currIndex === 1 ? 'active' : ''}`}  style={{backgroundImage: `url(${data.backgrounds[1]})`}}></div>
            <div className={`MainSlider__item-bg historia-slider item-2 ${currIndex === 2 ? 'active' : ''}`}  style={{backgroundImage: `url(${data.backgrounds[2]})`}}></div>

            <div className="HistoriaSlider">
                <div className="HistoriaSlider__caption wow fadeInUp">
                    {/* Título desktop */}
                    <h2 className="HistoriaSlider__caption-subtitle d-none d-lg-block">
                       {data.titulo}
                    </h2>
                    {/* Titulo mobile */}
                    <h2 className="HistoriaSlider__caption-subtitle d-block d-lg-none">
                        Histórias<br className="d-block d-lg-none" /> de uma vida
                    </h2>
                    <h1 className="HistoriaSlider__caption-title d-flex">
                    <ReactTextTransition
                        text={data.nomes[currIndex]}
                        style={{ margin: `0 20px 0 0`, maxWidth: '255px' }}
                        noOverflow={true}
                        springConfig={{ mass: 1, tension: 90, friction: 26 }}
                        className="fadeIn"
                        inline />
                        <div> {data.sobrenome} </div>
                    </h1>
                    <p className="HistoriaSlider__caption-desc">
                        {data.descricao}
                    </p>

                    <div className="HistoriaSlider__nav">
                        {[0,1,2].map(i => (
                            <button key={i} className={currIndex === i ? 'active' : ''} onClick={() => updateState(i)}></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistoriaSlider;