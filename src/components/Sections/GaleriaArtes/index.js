import axios from 'axios.instance'
import Pagination from "react-paginate"
import React, {useState, useEffect} from 'react'
import Masonry from 'react-masonry-css'
import {getStorage, setStorage} from 'util/storage'

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
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);
    const [paginate,
        setPaginate] = useState(false);
    const [currItems,
        setCurrItems] = useState([]);


    useEffect(() => {
        if (getStorage('colecoes  -data')) {
            setIsFetching(false);
            console.log(JSON.parse(getStorage('colecoes-data')))
            return setData(JSON.parse(getStorage('colecoes-data')))
        }

        axios
            .get('/colecoes')
            .then(response => {
                setData(response.data);
                setStorage('colecoes-data', JSON.stringify(response.data));
            })
            .catch(err => console.log(err))
            . finally(() => {
                setIsFetching(false);
            })
    }, []);

    const activeGaleria = (index) => {
        setShowGaleriaModal(true)
    }

    const changePage = () => {
        setPaginate(0)
    }

    return (
        <section className="GaleriaArtes mb-5 pb-lg-5">
            <GaleriaModal
                current={currentItem}
                data={data}
                close={() => setShowGaleriaModal(false)}
                visible={showGaleriaModal}
                items={false}/>

            <GaleriaFiltros setFiltros={setFiltros}/>

            <div className="container">
                <Masonry
                    className="GaleriaArtes__list"
                    breakpointCols={{
                    default: 4,
                    992: 2
                }}
                    columnClassName="my-masonry-grid_column">

                    {currItems.map(i => (
                        <article className="GaleriaArtes__item">
                            <img
                                className="GaleriaArtes__item-img"
                                src={i.img}
                                alt={i.legenda} />
                            <h5 className="GaleriaArtes__item-nome">{i.nome}</h5>
                            <span className="GaleriaArtes__item-author">{i.autor}</span>
                        </article>
                    ))}
                </Masonry>

                <Pagination
                    pageCount={18}
                    pageRangeDisplayed={1}
                    containerClassName="pagination"
                    nextLabel="Próximo"
                    previousLabel="Anterior"
                    itemClassFirst='first'
                    itemClassLast='last'
                    itemClassPrev="prev"
                    itemClassNext="next"
                    onPageChange={() => changePage}/>
            </div>
        </section>
    )
}

export default GaleriaArtes