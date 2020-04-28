import React, {useState, useEffect} from 'react'

import './styles.scss'

const GallerySlider = (props) => {
    const [currIndex,
        setCurrIndex] = useState(0);
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        let newData = [];
        
        [1,2,3,4,5,6,7,8,9,10].map( i => {
            if(props.data[`slider_foto${i}`]){
                newData.push({
                    imagem: props.data[`slider_foto${i}`],
                    legenda: props.data[`slider_legenda_foto${i}`]
                })
            }
        })

        setSliderData(newData)
    },[props.data])

    return (
        <React.Fragment>
            {sliderData[currIndex]
                ? <section className="GallerySlider" data-brush={props.brush}>
                        <img
                            src={sliderData[currIndex].imagem}
                            alt={sliderData[currIndex].legenda}
                            className="GallerySlider__img"/>
                        <footer className="GallerySlider__footer">
                            <div className="GallerySlider__desc">{sliderData[currIndex].legenda}</div>
                            <nav className="GallerySlider__controls">
                                {sliderData.map((_, i) => (
                                    <button
                                        className="GallerySlider__control"
                                        data-active={currIndex == i}
                                        onClick={() => setCurrIndex(i)}></button>
                                ))}
                            </nav>
                        </footer>
                    </section>

                : null
            }
        </React.Fragment>
    )
}

export default GallerySlider