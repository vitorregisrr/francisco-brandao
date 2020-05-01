import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';
import PageBanner from 'components/Sections/PageBanner';
import GallerySlider from 'components/Sections/GallerySlider';

const Hipismo = (props) => {
    const [isFetching, setIsFetching] = useState(true);
    const [data, setData] = useState(false);

    useEffect( () =>{
        if(getStorage('hipismo-data')){
            setIsFetching(false);
            console.log(JSON.parse(getStorage('hipismo-data')))
            setData(JSON.parse(getStorage('hipismo-data')));
        }else{
            axios.get('/pages/hipismo')
            .then(response => {
                setData(response.data);
                setStorage('hipismo-data', JSON.stringify(response.data));
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsFetching(false);
            })
        }
      }, []);

    return (
        <section className="Hipismo page-interna pb-5 mb-2 mb-lg-5">
            <PageBanner title={`Hipismo`} background={false}/>

            <main class="pt-3 pb-5 pt-lg-5 my-3 my-lg-5">
                <div className="container pt-4 pt-lg-0">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-between flex-column pb-lg-4">
                            <figure>
                                {data.foto1 ? 
                                (
                                    <div className="img-brush brush-blue-3">
                                        <img src={data.foto1} alt={data.legenda_foto1}/>
                                    </div>
                                ): null}
                                <figcaption className="text-lg-right">
                                {data.legenda_foto1}
                                </figcaption>
                            </figure>
                            <div className="row pb-lg-4 pt-4 pt-lg-0">
                                <div
                                    className="col-lg-3 d-flex align-items-end text-lg-right pr-lg-0 order-last order-lg-first">
                                    <figcaption>
                                        {data.legenda_foto2}
                                    </figcaption>
                                </div>
                                <div className="col-lg-9">
                                    <div className="img-brush">
                                        <img src={data.foto2} alt={data.legenda_foto2}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-5">
                            <div class="markup pt-lg-5">
                                <h3>
                                    {data.titulo}
                                </h3>
                                <div dangerouslySetInnerHTML={{__html: data.bloco_texto1}}></div>

                                <blockquote dangerouslySetInnerHTML={{__html: data.citacao}}></blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="hr-line line-2"></div>
                </div>

                <div className="container-interna">
                    <div className="markup">
                    <div dangerouslySetInnerHTML={{__html: data.bloco_texto2}}></div>

                    <blockquote dangerouslySetInnerHTML={{__html: data.citacao2}}></blockquote>

                    <div dangerouslySetInnerHTML={{__html: data.bloco_texto3}}></div>
                        <figure>
                            <div className="img-brush">
                                <img src={data.foto3} alt={data.legenda_foto3}/>
                            </div>
                            <figcaption>
                                {data.legenda_foto3}
                            </figcaption>
                        </figure>

                        <div dangerouslySetInnerHTML={{__html: data.bloco_texto4}}></div>
                        
                        <div className="mt-5 pt-lg-5">
                            <GallerySlider isFetching={isFetching} data={data} brush="top"/>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Hipismo;