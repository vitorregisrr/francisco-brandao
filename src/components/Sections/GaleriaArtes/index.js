import axios from 'axios.instance'
import React, {useState, useEffect} from 'react'
import Masonry from 'react-masonry-css'
import {getStorage, setStorage} from 'util/storage'

import GaleriaFiltros from './GaleriaFiltros'
import Pagination from './GaleriaPagination'
import GaleriaModal from './GaleriaModal'

import './styles.scss';

const GaleriaArtes = () => {
    const [filtros,
        setFiltros] = useState({nomeArtista: false, nomeObra: false, tipoObra: false, dataDe: false, dataAte: false});
    const [showGaleriaModal,
        setShowGaleriaModal] = useState(false);
    const [currentID,
        setCurrentID] = useState(1);
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState([]);
    const [paginate,
        setPaginate] = useState(1);
    const [currItems,
        setCurrItems] = useState([]);
    const [pageItems,
        setPageItems] = useState([]);

    useEffect(() => {
        if (getStorage('colecoes-data')) {
            setIsFetching(false);
            return setData(JSON.parse(getStorage('colecoes-data')));
        }

        axios
            .get('/colecoes/1')
            .then(response => {
                setData(response.data);
                setStorage('colecoes-data', JSON.stringify(response.data));
            })
            .catch(err => console.log(err))
            . finally(() => {
                setIsFetching(false);
            })
    }, []);

    useEffect(() => {
        setPaginate(1);
        const filtered = data.filter(i => {
            const teste = (filtros.nomeObra
                ? i.file_desc2 == filtros.nomeObra
                : true) && (filtros.nomeArtista
                ? i.file_artista == filtros.nomeArtista
                : true) && (filtros.tipoObra
                ? i.file_tipo == filtros.tipoObra
                : true) && (filtros.dataDe
                ? new Date(i.created_at) > new Date(filtros.dataDe)
                : true) && (filtros.dataAte
                ? new Date(i.created_at) < new Date(filtros.dataAte)
                : true);
            return teste;
        });
        setCurrItems(filtered);
    }, [filtros, data]);

    useEffect(() => {
        setPageItems(paginateArray(currItems, 18, paginate))
    }, [paginate, data, currItems])

    const activeGaleria = (id) => {
        setCurrentID(id);
        setShowGaleriaModal(true);
    }

    const changePage = (i) => {
        setPaginate(i)
    };

    const paginateArray = (array, page_size, page_number) => {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    return (
        <section className="GaleriaArtes mb-5 pb-lg-5">
            <GaleriaModal
                currentItem={currentID}
                data={data}
                closeModal={() => setShowGaleriaModal(false)}
                visible={showGaleriaModal}
                items={data}/>

            <GaleriaFiltros setParentFiltros={setFiltros} data={data}/>

            <div className="container">
                {pageItems.length > 0
                    ? (
                        <Masonry
                            className="GaleriaArtes__list"
                            breakpointCols={{
                            default: 4,
                            992: 2
                        }}
                            columnClassName="my-masonry-grid_column">
                            {pageItems.map(i => (
                                <article className="GaleriaArtes__item" onClick={() => activeGaleria(i.id)}>
                                    <img className="GaleriaArtes__item-img" src={i.file} alt={i.file_desc2}/>
                                    <h5 className="GaleriaArtes__item-nome">{i.file_desc2}</h5>
                                    <span className="GaleriaArtes__item-author">{i.file_artista}</span>
                                </article>
                            ))}
                        </Masonry>
                    )
                    : (
                        <div>
                            <h2
                                class="text-center color-primary text-uppercase mb-2">Oops!</h2>
                            <h4
                                class="text-center color-primary text-uppercase mt-0"
                                style={{
                                fontWeight: 400
                            }}>Os filtros selecionados não tiveram um resultado.</h4>
                            <hr/>
                        </div>
                    )}

                {pageItems.length > 0
                    ? <Pagination
                            changePage={changePage}
                            totalItems={currItems.length / 18}
                            currPage={paginate - 1}/>
                    : null}
            </div>
        </section>
    )
}

export default GaleriaArtes