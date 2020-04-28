import React, {useState, useEffect} from 'react'
import {getStorage, setStorage} from 'util/storage'
import axios from 'axios.instance'

import './styles.scss'
import PageBanner from 'components/Sections/PageBanner'
import GallerySlider from 'components/Sections/GallerySlider'

const MeioAmbiente = (props) => {

    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);

    useEffect(() => {
        if (getStorage('meioa-data')) {
            setIsFetching(false);
            console.log(JSON.parse(getStorage('meioa-data')))
            return setData(JSON.parse(getStorage('meioa-data')))
        }

        axios
            .get('/meio-ambiente')
            .then(response => {
                setData(response.data);
                setStorage('meioa-data', JSON.stringify(response.data));
            })
            .catch(err => console.log(err))
            . finally(() => {
                setIsFetching(false);
            })
    }, []);

    return (
        <section className="MeioAmbiente page-interna pb-5 mb-2 mb-lg-5">
            <PageBanner title={`Meio Ambiente`} background={false}/>
            <main class="pt-3 pb-5 pt-lg-5 my-3 my-lg-5">
                <div className="container pt-4 pt-lg-5">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-between flex-column pb-lg-4">
                            <figure className="my-4 my-lg-0">
                                <div
                                    className="img-brush brush-blue-spiral d-flex justify-content-center justify-content-lg-end">
                                    <img
                                        src={data.foto1}
                                        alt={data.legenda_foto1}
                                        style={{
                                        width: '73%'
                                    }}/>
                                </div>
                                <figcaption className="text-center text-lg-right">
                                  {data.legenda_foto1}
                                </figcaption>
                            </figure>
                            <div className="row pb-lg-4">
                                <div
                                    className="col-lg-3 d-flex align-items-end text-lg-right pr-lg-0 order-last order-lg-first"></div>
                                <div className="col-lg-9">
                                    <figure>
                                        <div className="img-brush">
                                            <img src={data.foto2} alt={data.legenda_foto2}/>
                                        </div>
                                        <figcaption className="text-lg-right">
                                          {data.legenda_foto2}
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-5">
                            <div class="markup">
                                <h3>
                                   {data.titulo}
                                </h3>
                                <div dangerouslySetInnerHTML={{__html: data.bloco_texto1}}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="hr-line line-3"></div>
                </div>

                <div className="container-interna">
                    <div className="markup">

                        <figure>
                            <div className="img-brush">
                                <img src={data.foto2} alt={data.legenda_foto2}/>
                            </div>
                            <figcaption>
                                {data.legenda_foto2}
                            </figcaption>
                        </figure>
                        <h4 className="mt-lg-5">
                            Planejamento e construção
                        </h4>
                        <div dangerouslySetInnerHTML={{__html: data.bloco_texto2}}></div>

                        <figure>
                            <div className="img-brush brush-line brush-line-bottom-right-7">
                                <img src={data.foto3} alt={data.legenda_foto3}/>
                            </div>
                            <figcaption>
                                {data.legenda_foto3}
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div className="container my-3 my-lg-5">
                    <figure>
                        <div className="img-brush">
                            <img src={data.foto4} alt={data.legenda_foto4}/>
                        </div>
                        <figcaption>
                                {data.legenda_foto4}
                        </figcaption>
                    </figure>
                </div>

                <div className="container-interna">
                    <div className="markup">
                        <div dangerouslySetInnerHTML={{__html: data.bloco_texto3}}></div>
                        <blockquote class="lg" dangerouslySetInnerHTML={{__html: data.citacao}}></blockquote>

                       <div dangerouslySetInnerHTML={{__html: data.bloco_texto4}}></div>

                        <figure>
                            <div className="img-brush">
                                <img src={data.foto5} alt={data.legenda_foto5}/>
                            </div>

                            <figcaption>
                                {data.legenda_foto5}
                            </figcaption>
                        </figure>

                      <div dangerouslySetInnerHTML={{__html: data.bloco_texto2}}></div>

                        <GallerySlider data={data} brush="bottom"/>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default MeioAmbiente
