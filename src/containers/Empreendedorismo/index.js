import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';
import {Helmet} from "react-helmet"
import axios from 'axios.instance'

import './styles.scss';
import PageBanner from 'components/Sections/PageBanner';

const Empreendedorismo = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);

    useEffect(() => {
        if (getStorage('empreendedorismo-data')) {
            setIsFetching(false);
            console.log(JSON.parse(getStorage('empreendedorismo-data')))
            return setData(JSON.parse(getStorage('empreendedorismo-data')))
        }

        axios
            .get('/pages/empreendedorismo')
            .then(response => {
                setData(response.data);
                setStorage('empreendedorismo-data', JSON.stringify(response.data));
            })
            .catch(err => console.log(err))
            . finally(() => {
                setIsFetching(false);
            })
    }, []);

    return (
        <section className="Empreendedorismo page-interna pb-4 mb-2 mb-lg-5">
            {data ? 
                <Helmet>
                    <meta name="keywords" content={data.keywords}/>
                    <meta name="description" content={data.description}/>
                    <title>{data.metatitle}</title>
                </Helmet> 
            : null}

            <PageBanner title={`Empreendedorismo`} background={data.banner_image || require('../../assets/images/backgrounds/header-empreendedorismo.png')}/>
            <main className="pt-3 pb-5 pt-lg-5 my-3 my-lg-5">
                <div className="container pt-4 pt-lg-5">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-between flex-column pb-lg-4">
                            <figure className="my-4 my-lg-0">
                                {data.foto1
                                    ? (
                                        <div className="img-brush brush-orange">
                                            <img src={data.foto1} alt={data.legenda_foto1}/>
                                        </div>
                                    )
                                    : null}
                                <figcaption className="text-lg-right" dangerouslySetInnerHTML={{
                                __html: data.legenda_foto1
                            }}></figcaption>
                            </figure>
                            <div className="row pb-lg-4 pt-4 pt-lg-0">
                                <div
                                    className="col-lg-3 d-flex align-items-end text-lg-right pr-lg-0 order-last order-lg-first">
                                     <figcaption dangerouslySetInnerHTML={{
                                __html: data.legenda_foto2
                            }}></figcaption>
                                </div>
                                <div className="col-lg-9">
                                    <div className="img-brush">
                                        <img src={data.foto2} alt={data.legenda_foto2}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-5">
                            <div className="markup pt-4 pt-lg-1">
                                <h3>
                                    {data.titulo}
                                </h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                    __html: data.bloco_texto1
                                }}></div>
                                <blockquote
                                    dangerouslySetInnerHTML={{
                                    __html: data.citacao
                                }}></blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-interna">
                    <div className="markup">
                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.bloco_texto2
                        }}></div>
                    </div>
                </div>

                <div className="container">
                    <div className="hr-line line-1"></div>
                </div>

                <div className="container-interna">
                    <div className="markup">
                        <h4>
                            {data.titulo2}
                        </h4>
                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.bloco_texto3
                        }}></div>

                        <blockquote
                            dangerouslySetInnerHTML={{
                            __html: data.citacao2
                        }}></blockquote>

                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.bloco_texto4
                        }}></div>

                        <figure>
                            <div className="img-brush">
                                <img src={data.foto3} alt={data.legenda_foto3}/>
                            </div>
                            <figcaption dangerouslySetInnerHTML={{
                                __html: data.legenda_foto3
                            }}></figcaption>
                        </figure>

                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.bloco_texto5
                        }}></div>

                        <h4>{data.titulo3}</h4>

                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.bloco_texto6
                        }}></div>

                        <blockquote
                            dangerouslySetInnerHTML={{
                            __html: data.citacao3
                        }}></blockquote>

                        <div
                            dangerouslySetInnerHTML={{
                            __html: data.bloco_texto7
                        }}></div>

                        <figure>
                            <div className="img-brush">
                                <img src={data.foto4} alt={data.legenda_foto4}/>
                            </div>
                            <figcaption dangerouslySetInnerHTML={{
                                __html: data.legenda_foto4
                            }}></figcaption>
                        </figure>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Empreendedorismo;