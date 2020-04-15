import React, {useState} from 'react'

import './styles.scss'

const GallerySlider = ({item, brush}) => {
    const [currIndex,
        setCurrIndex] = useState(0);

    const items = [0,0,0,0, 0]

    return (
        <section className="GallerySlider" data-brush={brush}>
            <img
                // src={items[currIndex].image}
                // alt={items[currIndex].desc}
                src={require('../../../assets/images/thumbs/empreendedorismo-1.png')}
                alt={'Chiquinho Brandão com Serginho, Gabriel, Giovani e Xavier, tratadores da equipe Santo Antônio, nas cocheiras do Paddock.'}
                className="GallerySlider__img"/>
            <footer className="GallerySlider__footer">
                {/* <div className="GallerySlider__desc">{items[currIndex].image}</div> */}
                <div className="GallerySlider__desc">Chiquinho Brandão com Serginho, Gabriel, Giovani e Xavier, tratadores da equipe Santo Antônio, nas cocheiras do Paddock.</div>
                <nav className="GallerySlider__controls">
                    {items.map((_, i) => (
                        <button
                            className="GallerySlider__control"
                            data-active={currIndex == i}
                            onClick={() => setCurrIndex(i)}></button>
                    ))};
                </nav>
            </footer>
        </section>
    )
}

export default GallerySlider