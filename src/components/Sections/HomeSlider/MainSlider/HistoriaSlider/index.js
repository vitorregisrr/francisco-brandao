import React, {useState} from 'react'

const HistoriaSlider = () => {
    const {historiaIndex, sethistoriaIndex} = useState(0);
    const {historiaBg, setHistoriaBg} = useState('assets/images/home/slider-0.png');
    const {historiaName, setHistoriaName} = useState('Francisco');

    const updateState = index => {
        switch (index) {
            case 0:
                sethistoriaIndex(0);
                setHistoriaBg('assets/images/home/slider-0.png');
                setHistoriaName('Francisco');
                break;

            case 1:
                sethistoriaIndex(1);
                setHistoriaBg('assets/images/home/slider-1.png');
                setHistoriaName('Chico');
                break;

            case 2:
                sethistoriaIndex(2);
                setHistoriaBg('assets/images/home/slider-2.png');
                setHistoriaName('Chiquinho');
                break
        }
    }

    return (
        <section className="MainSlider__item" key="historia-slider">
            <div
                className={`MainSlider__item-bg ${'historia-slider'}`}
                // style={{backgroundImage: `url${historiaBg}`}}
                ></div>
            <div className="HistoriaSlider">
                <div className="HistoriaSlider__caption">
                    <h2 className="HistoriaSlider__caption-subtitle">
                        Histórias de uma vida
                    </h2>
                    <h1 className="d-flex HistoriaSlider__caption-title">
                        <div class="fadeIn">{historiaName}</div>
                        <div>Brandão</div>
                    </h1>
                    <p className="HistoriaSlider__caption-desc">
                        Conheça a trajetória de Francisco Soares Brandão, sócio-fundador da FSB, maior
                        empresa de comunicação corporativa da América Latina.
                    </p>
                </div>

                <div className="HistoriaSlider-nav">
                    <button onClick={() => updateState(0)}></button>
                    <button onClick={() => updateState(1)}></button>
                    <button onClick={() => updateState(2)}></button>
                </div>
            </div>
        </section>
    )
}

export default HistoriaSlider;