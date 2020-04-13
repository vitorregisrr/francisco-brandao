import React, {useState} from 'react'

import GaleriaFiltros from './GaleriaFiltros'

const GaleriaArtes = () => {
    const [filtros, setFiltros] = useState({
        nomeArtista: '',
        nomeObra: '',
        tipoObra: '',
        de: '',
        até: ''
    });

    
    return (
        <section className="GaleriaArtes mb-5 pb-lg-5">
            <GaleriaFiltros setFiltros={setFiltros}/>
            <div className="container">
                <div className="GaleriaArtes__list">
                    <article className="GaleriaArtes__item">
                        <img className="GaleriaArtes__item-img" src="" alt=""/>
                        <h5 className="GaleriaArtes__item-nome">Nome da Obra, 2012</h5>
                        <span className="GaleriaArtes__item-author">Autor da Obra</span>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default GaleriaArtes