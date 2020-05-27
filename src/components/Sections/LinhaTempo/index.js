import React, {useState} from 'react'
import {Element} from 'react-scroll'
import {CSSTransition} from 'react-transition-group'

import LinhaHeader from './LinhaHeader'
import LinhaBottom from './LinhaBottom'

import './styles.scss';

const LinhaTempo = ({data}) => {
    const [current,
        setCurrent] = useState(0);

    const Content0 = () => (
        <div>
            <h3 className="LinhaTempo__title">
                Origens
            </h3>
            <div className="markup">
                <h4>{data.timeline1_titulo}</h4>
                <div dangerouslySetInnerHTML={{__html: data.timeline1_bloco_texto1}}></div>
                <figure className="pt-4">
                    <div className="img-brush brush-line brush-line-top-left-2">
                        <img src={data.timeline1_foto1} alt={data.timeline1_legenda_foto1}/>
                    </div>
                    <figcaption dangerouslySetInnerHTML={{__html: data.timeline1_legenda_foto1}}></figcaption>
                </figure>

                <figure className="pt-3">
                    <div className="img-brush brush-line brush-line-bottom-right">
                        <img src={data.timeline1_foto2} alt={data.timeline1_legenda_foto2}/>
                    </div>
                    <figcaption dangerouslySetInnerHTML={{__html: data.timeline1_legenda_foto2}}></figcaption>
                </figure>
            </div>
        </div>
    )

    const Content1 = () => (
        <div>
            <h3 className="LinhaTempo__title">
                Infância
            </h3>
            <div className="markup">
                <h4>{data.timeline2_titulo}</h4>
               
                <div dangerouslySetInnerHTML={{__html: data.timeline2_bloco_texto1}}></div>
                <figure className="pt-lg-5 mt-lg-3">
                    <div className="img-brush brush-line brush-line-top-left-2">
                        <img src={data.timeline2_foto1} alt={data.timeline2_legenda_foto1}/>
                    </div>
                    <figcaption dangerouslySetInnerHTML={{__html: data.timeline2_legenda_foto1}}></figcaption>
                </figure>

                <figure className="">
                    <div className="img-brush brush-line brush-line-bottom-right">
                       <img src={data.timeline2_foto2} alt={data.timeline2_legenda_foto2}/>
                    </div>
                    <figcaption dangerouslySetInnerHTML={{__html: data.timeline2_legenda_foto2}}></figcaption>
                </figure>

                <div dangerouslySetInnerHTML={{__html: data.timeline2_bloco_texto2}}></div>

                <blockquote dangerouslySetInnerHTML={{__html: data.timeline2_citacao}}></blockquote>

                <div dangerouslySetInnerHTML={{__html: data.timeline2_bloco_texto3}}></div>

                <figure className="">
                    <div className="img-brush brush-line brush-line-bottom-right-2">
                        <img src={data.timeline2_foto3} alt={data.timeline2_legenda_foto3}/>
                    </div>
                    <figcaption dangerouslySetInnerHTML={{__html: data.timeline2_legenda_foto3}}></figcaption>
                </figure>

                 <div dangerouslySetInnerHTML={{__html: data.timeline2_bloco_texto4}}></div>

                <h4>
                    {data.timeline2_titulo2}
                </h4>

                <div dangerouslySetInnerHTML={{__html: data.timeline2_bloco_texto5}}></div>

                <figure>
                    <div className="img-brush">
                        <img src={data.timeline2_foto4} alt={data.timeline2_legenda_foto4}/>
                    </div>
                    <figcaption dangerouslySetInnerHTML={{__html: data.timeline2_legenda_foto4}}></figcaption>
                </figure>

            </div>
        </div>

    )

    const Content2 = () => (
        <div>
            <h3 className="LinhaTempo__title">
                Juventude
            </h3>
            <div className="markup">
                <h4>
                    {data.timeline3_titulo}
                </h4>

               <div dangerouslySetInnerHTML={{__html: data.timeline3_bloco_texto1}}></div>

                <h4>
                    {data.timeline3_titulo2}
                </h4>

                <div dangerouslySetInnerHTML={{__html: data.timeline3_bloco_texto2}}></div>

                <blockquote dangerouslySetInnerHTML={{__html: data.timeline3_citacao}}></blockquote>

                <div dangerouslySetInnerHTML={{__html: data.timeline3_bloco_texto3}}></div>

                <h4>{data.timeline3_titulo3}</h4>

                <div dangerouslySetInnerHTML={{__html: data.timeline3_bloco_texto4}}></div>

                <figure>
                    <img src={data.timeline3_foto1} alt={data.timeline3_legenda_foto1}/>
                    <figcaption dangerouslySetInnerHTML={{__html: data.timeline3_legenda_foto1}}></figcaption>
                </figure>

                <div dangerouslySetInnerHTML={{__html: data.timeline3_bloco_texto5}}></div>

                <figure>
                    <div className="img-brush brush-line brush-line-bottom-right-3">
                        <img src={data.timeline3_foto2} alt={data.timeline3_legenda_foto2}/>
                    </div>
                    <figcaption dangerouslySetInnerHTML={{__html: data.timeline3_legenda_foto2}}></figcaption>
                </figure>

                <h4>{data.timeline3_titulo4}</h4>

                <div dangerouslySetInnerHTML={{__html: data.timeline3_bloco_texto6}}></div>

                <blockquote dangerouslySetInnerHTML={{__html: data.timeline3_citacao2}}></blockquote>

                <div dangerouslySetInnerHTML={{__html: data.timeline3_bloco_texto7}}></div>

                <figure>
                    <img src={data.timeline3_foto3} alt={data.timeline3_legenda_foto3}/>
                    <figcaption dangerouslySetInnerHTML={{__html: data.timeline3_legenda_foto3}}></figcaption>
                </figure>

                <div dangerouslySetInnerHTML={{__html: data.timeline3_bloco_texto8}}></div>

                <figure>
                    <div className="img-brush brush-line brush-line-bottom-right-4">
                        <img src={data.timeline3_foto4} alt={data.timeline3_legenda_foto4}/>
                    </div>
                    <figcaption dangerouslySetInnerHTML={{__html: data.timeline3_legenda_foto4}}></figcaption>
                </figure>
            </div>

        </div>
    )

    const Content3 = () => (
        <div>
            <h3 className="LinhaTempo__title">
                Vida Adulta
            </h3>
            <div className="markup">
                <h4>
                    {data.timeline4_titulo}
                </h4>

                <div dangerouslySetInnerHTML={{__html: data.timeline4_bloco_texto1}}></div>

                <div className="row">
                    <div className="col-lg-6">
                        <figure>
                            <div className="img-brush brush-line brush-line-bottom-left">
                                <img src={data.timeline4_foto1} alt={data.timeline4_legenda_foto1} height="460" style={{objectFit: 'cover'}}/>
                            </div>
                            <figcaption class="text-lg-right" dangerouslySetInnerHTML={{__html: data.timeline4_legenda_foto1}}></figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <figure>
                            <div className="img-brush">
                                <img src={data.timeline4_foto2} alt={data.timeline4_legenda_foto2}  height="460" />
                            </div>
                            <figcaption dangerouslySetInnerHTML={{__html: data.timeline4_legenda_foto2}}></figcaption>
                        </figure>
                    </div>
                </div>

                <blockquote dangerouslySetInnerHTML={{__html: data.timeline4_citacao}}></blockquote>

                <div dangerouslySetInnerHTML={{__html: data.timeline4_bloco_texto2}}></div>

                <h4> {data.timeline4_titulo2}</h4>
               
                <div dangerouslySetInnerHTML={{__html: data.timeline4_bloco_texto3}}></div>

                <blockquote dangerouslySetInnerHTML={{__html: data.timeline4_citacao2}}>
                </blockquote>


                <div dangerouslySetInnerHTML={{__html: data.timeline4_bloco_texto4}}></div>

                <h4>{data.timeline4_titulo3}</h4>
               
                <div dangerouslySetInnerHTML={{__html: data.timeline4_bloco_texto5}}></div>

                <figure>
                    <div className="img-brush">
                        <img src={data.timeline4_foto3} alt={data.timeline4_legenda_foto3}/>
                    </div>
                    <figcaption dangerouslySetInnerHTML={{__html: data.timeline4_legenda_foto3}}></figcaption>
                </figure>

                <h4>{data.timeline4_titulo4}</h4>

                <div dangerouslySetInnerHTML={{__html: data.timeline4_bloco_texto6}}></div>

                <figure>
                    <div className="img-brush brush-line brush-line-bottom-right-tall">
                        <img src={data.timeline4_foto4} alt={data.timeline4_legenda_foto4}/>
                    </div>
                    <figcaption class="text-lg-right" dangerouslySetInnerHTML={{__html: data.timeline4_legenda_foto4}}></figcaption>
                </figure>

                <div dangerouslySetInnerHTML={{__html: data.timeline4_bloco_texto7}}></div>

                <h4>{data.timeline4_titulo5}</h4>

                <div dangerouslySetInnerHTML={{__html: data.timeline4_bloco_texto8}}></div>

                <figure>
                    <div className="img-brush brush-line brush-line-bottom-right-tall">
                        <img src={data.timeline4_foto5} alt={data.timeline4_legenda_foto5}/>
                    </div>
                    <figcaption dangerouslySetInnerHTML={{__html: data.timeline4_legenda_foto5}}></figcaption>
                </figure>
            </div>
        </div>
    )

    return (
        <Element name="LinhaTempo">
            <section className="LinhaTempo">
                <LinhaHeader setCurrent={setCurrent} current={current}/>
                <div className="container-interna LinhaTempo__content">
                    <CSSTransition
                        unmountOnExit={true}
                        in={current == 0}
                        timeout={500}
                        classNames="CSSTransition--fade">
                        <Content0/>
                    </CSSTransition>
                    <CSSTransition
                        unmountOnExit={true}
                        in={current == 1}
                        timeout={500}
                        classNames="CSSTransition--fade">
                        <Content1/>
                    </CSSTransition>
                    <CSSTransition
                        unmountOnExit={true}
                        in={current == 2}
                        timeout={500}
                        classNames="CSSTransition--fade">
                        <Content2/>
                    </CSSTransition>
                    <CSSTransition
                        unmountOnExit={true}
                        in={current == 3}
                        timeout={500}
                        classNames="CSSTransition--fade">
                        <Content3/>
                    </CSSTransition>
                </div>
                <LinhaBottom setCurrent={setCurrent} current={current}/>
            </section>
        </Element>
    )
}

export default LinhaTempo