import React, {useState, useEffect} from 'react'
import {getStorage, setStorage} from 'util/storage'
import axios from 'axios.instance'
import {Helmet} from "react-helmet"

import './styles.scss'
import PageBanner from 'components/Sections/PageBanner'
import GaleriaArtes from 'components/Sections/GaleriaArtes'

const Colecao = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);

    useEffect(() => {
        console.log()
        if (getStorage('colecao-data')) {
            setIsFetching(false);
            console.log(JSON.parse(getStorage('colecao-data')))
            return setData(JSON.parse(getStorage('colecao-data')))
        }

        axios
            .get('/pages/colecao-de-arte')
            .then(response => {
                setData(response.data);
                setStorage('colecao-data', JSON.stringify(response.data));
            })
            .catch(err => console.log(err))
            . finally(() => {
                setIsFetching(false);
            })
    }, []);

    return (
        <section className="Colecao page-interna">
            {data ? 
                <Helmet>
                    <meta name="keywords" content={data.keywords}/>
                    <meta name="description" content={data.description}/>
                    <title>{data.metatitle}</title>
                </Helmet> 
            : null}

            <PageBanner title={`Coleção de Arte`} background={data.banner_image || require('../../assets/images/backgrounds/header-colecao.png')}/>

            <main class="py-5 mb-3 mb-lg-5 mt-1">
                <div className="container-interna">
                    <div className="mb-3">
                        <div
                            className="mb-5 pb-lg-5"
                            dangerouslySetInnerHTML={{
                            __html: data.bloco_texto4
                        }}></div>
                        </div>
                    {data.foto1
                        ? (
                            <div className="img-brush brush-yellow">
                                <img src={data.foto1} alt={data.legenda_foto1}/>
                            </div>
                        )
                        : null}
                    <div className="markup">
                        <div className="pl-lg-3">
                            <blockquote
                                class="pl-4"
                                dangerouslySetInnerHTML={{
                                __html: data.citacao
                            }}></blockquote>
                        </div>
                    </div>

                    <div
                        className="mt-5 pt-lg-3"
                        dangerouslySetInnerHTML={{
                        __html: data.bloco_texto1
                    }}></div>
                </div>

                <GaleriaArtes/>

                <div className="container-interna">
                    <h3 className="title-brush-red">
                        {data.titulo}
                    </h3>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.bloco_texto2
                    }}></div>
                    <figure className="pb-1 pb-lg-0 pt-3 mb-lg-4">
                        <img src={data.foto2} alt={data.legenda_foto2}/>
                        <figcaption dangerouslySetInnerHTML={{
                                __html: data.legenda_foto2
                            }}></figcaption>
                    </figure>
                </div>

                <div className="container container-large mb-0 mb-lg-4">
                    <div className="row">
                        <div className="col-lg-7">
                            <figure>
                                <div className="img-brush brush-line brush-line-bottom-left-2">
                                    <img src={data.foto3} alt={data.legenda_foto3}/>
                                </div>
                                <figcaption className="text-right arte">
                                    {data.legenda_foto3}
                                <span>
                                    {data.artista_foto3}
                                    </span>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-5">
                            <figure>
                                <div className="img-brush brush-line brush-line-top-right-2">
                                    <img src={data.foto4} alt={data.legenda_foto4}/>
                                </div>
                                <figcaption className="arte">
                                    {data.legenda_foto4}
                                    <span>
                                    {data.artista_foto4}
                                    </span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>

                <div className="container-interna pb-4">
                    <div
                        className="mb-lg-5"
                        dangerouslySetInnerHTML={{
                        __html: data.bloco_texto3
                    }}></div>

                    <figure className="mb-5">
                        <div className="img-brush brush-line brush-line-bottom-right-5">
                            <img src={data.foto5} alt={data.legenda_foto5}/>
                        </div>
                        <figcaption className="arte">
                            {data.legenda_foto5}
                            <span>
                                    {data.artista_foto5}
                                    </span>
                        </figcaption>
                    </figure>
                </div>
            </main>
        </section>
    )
}

export default Colecao;