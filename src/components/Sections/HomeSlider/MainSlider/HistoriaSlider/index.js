import React from 'react'

const HistoriaSlider = () => {
    const {historiaIndex, sethistoriaIndex} = useState(0);
    const {historiaBg, setHistoriaBg} = useState('/img/home/slider-0.png');
    const {historiaName, setHistoriaName} = useState('Francisco');

    const updateState = index => {
        switch(index){
            case 0:
                sethistoriaIndex(0);
                setHistoriaBg('/img/home/slider-0');
                setHistoriaName('Francisco');
            break;

            case 1:
                sethistoriaIndex(1);
                setHistoriaBg('/img/home/slider-1');
                setHistoriaName('Chico');
            break;

            case 2:
                sethistoriaIndex(2);
                setHistoriaBg('/img/home/slider-2');
                setHistoriaName('Chiquinho');
            break
        }
    }
    
    return (
        <section
            class="FullSlider__item"
            style={{
            backgroundImage: historiaBg }}>

            <div className="FullSlider__subslider">
                <div className="FullSlider__subslider-caption">
                    <h2 className="FullSlider__subslider">
                        Histórias de uma vida
                    </h2>
                    <h1 className="d-flex">
                        <div>{historiaName}</div>
                        <div>Brandão</div>
                    </h1>
                    <p className="FullSlider__item-desc">
                        Conheça a trajetória de Francisco Soares Brandão, sócio-fundador da FSB, maior
                        empresa de comunicação corporativa da América Latina.
                    </p>
                </div>

                <div className="FullSlider__subslider-nav">
                    <button onClick={() => updateState(0)}></button>
                    <button onClick={() => updateState(1)}></button>
                    <button onClick={() => updateState(2)}></button>
                </div>
            </div>
        </section>
    )
}

export default HistoriaSlider;