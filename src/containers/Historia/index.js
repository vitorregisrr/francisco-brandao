import React, {useState, useEffect} from 'react'
import {getStorage, setStorage} from 'util/storage';
import axios from 'axios.instance'

import './styles.scss'
import PageBanner from 'components/Sections/PageBanner'
import LinhaTempo from 'components/Sections/LinhaTempo'

const Historia = (props) => {
    const [isFetching, setIsFetching] = useState(true);
    const [data, setData] = useState(false);

    useEffect( () =>{
        if(getStorage('historia-data')){
            setIsFetching(false);
            return setData(JSON.parse(getStorage('historia-data')))
        }
  
        axios.get('/pages/historia')
        .then(response => {
            setData(response.data);
            console.log(response.data)
            setStorage('historia-data', JSON.stringify(response.data));
        })
        .catch(err => console.log(err))
        .finally(() => {
            setIsFetching(false);
        })
      } ,[]);

    return (
        <section className="Historia page-interna">
            <PageBanner title={`História`} background={data.banner_image || require('../../assets/images/backgrounds/header-historia.png')}/>
            <main className="pt-3 pb-5 pt-lg-5 my-3 my-lg-5">
                <div className="container pt-5 mt-lg-4">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-between flex-column pb-lg-4">
                            <figure className="my-4 my-lg-0" >
                                {data.foto1 ? 
                                (
                                    <div className="img-brush brush-blue">
                                        <img src={data.foto1} alt={data.legenda_foto1}/>
                                    </div>
                                
                                ): null}
                                <figcaption className="text-lg-right">
                                {data.legenda_foto1}
                                </figcaption>
                            </figure>
                            <div className="row mt-3 mt-lg-0">
                                <div className="col-lg-3 d-flex align-items-end text-lg-right pr-lg-0 order-last order-lg-first">
                                   <figcaption>{data.legenda_video1}</figcaption>
                                </div>
                                <div className="col-lg-9">
                                    <div className="img-brush brush-line brush-line-top-left">
                                        <iframe
                                            width="100%"
                                            height="230"
                                            src={data.video1}
                                            frameborder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-5">
                            <div className="markup">
                                <h3 className="mt-5 mt-lg-0">
                                    {data.titulo}
                                </h3>
                                <p>
                                    <b>
                                        {data.subtitulo}
                                    </b>
                                </p>
                                <div dangerouslySetInnerHTML={{__html: data.bloco_texto1}}>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: data.bloco_texto2}}>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: data.bloco_texto3}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <LinhaTempo data={data}/>
            </main>
        </section>
    )
}

export default Historia;