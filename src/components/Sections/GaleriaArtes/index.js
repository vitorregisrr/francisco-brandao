import React, {useState} from 'react'
import Masonry from 'react-masonry-css'

import GaleriaFiltros from './GaleriaFiltros'
import GaleriaModal from './GaleriaModal'

import './styles.scss';

const GaleriaArtes = () => {
    const [filtros,
        setFiltros] = useState({nomeArtista: '', nomeObra: '', tipoObra: '', de: '', até: ''});
    const [showGaleriaModal,
        setShowGaleriaModal] = useState(false);
    const [currentItem,
        setCurrentItem] = useState(0);

    const activeGaleria = (index) => {
        setShowGaleriaModal(true)
    }

    return (
        <section className="GaleriaArtes mb-5 pb-lg-5">
            <GaleriaModal current={currentItem} close={() => setShowGaleriaModal(false)} visible={showGaleriaModal} items={false}/>
            <GaleriaFiltros setFiltros={setFiltros}/>
            <div className="container">
                <Masonry
                    className="GaleriaArtes__list"
                    breakpointCols={{default: 4, 992: 2}}
                    columnClassName="my-masonry-grid_column">
                    <article className="GaleriaArtes__item" onClick={() => activeGaleria(1)}>
                        <img
                            className="GaleriaArtes__item-img"
                            src={require('../../../assets/images/thumbs/galeria-1.png')}
                            alt=""/>
                        <h5 className="GaleriaArtes__item-nome">Nome da Obra, 2012</h5>
                        <span className="GaleriaArtes__item-author">Autor da Obra</span>
                    </article>
                    <article className="GaleriaArtes__item">
                        <img
                            className="GaleriaArtes__item-img"
                            src={require('../../../assets/images/thumbs/galeria-2.png')}
                            alt=""/>
                        <h5 className="GaleriaArtes__item-nome">Nome da Obra, 2012</h5>
                        <span className="GaleriaArtes__item-author">Autor da Obra</span>
                    </article>

                    <article className="GaleriaArtes__item">
                        <img
                            className="GaleriaArtes__item-img"
                            src={require('../../../assets/images/thumbs/galeria-1.png')}
                            alt=""/>
                        <h5 className="GaleriaArtes__item-nome">Nome da Obra, 2012</h5>
                        <span className="GaleriaArtes__item-author">Autor da Obra</span>
                    </article>
                    <article className="GaleriaArtes__item">
                        <img
                            className="GaleriaArtes__item-img"
                            src={require('../../../assets/images/thumbs/galeria-2.png')}
                            alt=""/>
                        <h5 className="GaleriaArtes__item-nome">Nome da Obra, 2012</h5>
                        <span className="GaleriaArtes__item-author">Autor da Obra</span>
                    </article>

                    <article className="GaleriaArtes__item">
                        <img
                            className="GaleriaArtes__item-img"
                            src={require('../../../assets/images/thumbs/galeria-1.png')}
                            alt=""/>
                        <h5 className="GaleriaArtes__item-nome">Nome da Obra, 2012</h5>
                        <span className="GaleriaArtes__item-author">Autor da Obra</span>
                    </article>
                    <article className="GaleriaArtes__item">
                        <img
                            className="GaleriaArtes__item-img"
                            src={require('../../../assets/images/thumbs/galeria-2.png')}
                            alt=""/>
                        <h5 className="GaleriaArtes__item-nome">Nome da Obra, 2012</h5>
                        <span className="GaleriaArtes__item-author">Autor da Obra</span>
                    </article>
                </Masonry>
            </div>
        </section>
    )
}

export default GaleriaArtes