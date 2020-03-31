import React, {useState} from 'react'
import ReactTextTransition from "react-text-transition";

import './style.scss'

const HistoriaSlider = (goFirst) => {
    const [currIndex, setCurrIndex] = useState(0);
    const [historiaBg, setHistoriaBg] = useState('assets/images/home/slider-0.png');

    const updateState = index => {
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
    }

    return (
        <section className="MainSlider__item" key="historia-slider">
            
            <div className={`MainSlider__item-bg historia-slider item-0 ${currIndex === 0 ? 'active' : ''}`}></div>
            <div className={`MainSlider__item-bg historia-slider item-1 ${currIndex === 1 ? 'active' : ''}`}></div>
            <div className={`MainSlider__item-bg historia-slider item-2 ${currIndex === 2 ? 'active' : ''}`}></div>

            <div className="HistoriaSlider">
                <div className="HistoriaSlider__caption wow fadeInUp">
                    <h2 className="HistoriaSlider__caption-subtitle">
                        Histórias de uma vida
                    </h2>
                    <h1 className="HistoriaSlider__caption-title d-flex">
                    <ReactTextTransition
                        text={['Francisco', 'Chico', 'Chiquinho'][currIndex]}
                        style={{ margin: "0 20px 0 0" }}
                        noOverflow={true}
                        className="fadeIn"
                        inline />
                        <div> Brandão</div>
                    </h1>
                    <p className="HistoriaSlider__caption-desc">
                        Conheça a trajetória de Francisco Soares Brandão, sócio-fundador da FSB, maior
                        empresa de comunicação corporativa da América Latina.
                    </p>

                    <div className="HistoriaSlider__nav">
                        {[0,1,2].map(i => (
                            <button className={currIndex === i ? 'active' : ''} onClick={() => updateState(i)}></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistoriaSlider;