import React from 'react'

import './styles.scss'
import PageBanner from 'components/Sections/PageBanner'
import LinhaTempo from 'components/Sections/LinhaTempo'

const Historia = (props) => {
    return (
        <section className="Historia page-interna">
            <PageBanner title={`História`} background={false}/>
            <main class="pt-3 pb-5 pt-lg-5 my-3 my-lg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-between flex-column pb-lg-4">
                            <figure className="my-4 my-lg-0" >
                                <div className="img-brush brush-blue">
                                    <img src={require('../../assets/images/thumbs/historia-1.png')} alt=""/>
                                </div>
                                <figcaption className="text-lg-right">
                                    Legenda loren ipsum dolor Legenda loren ipsum dolor
                                </figcaption>
                            </figure>
                            <div className="row">
                                <div className="col-lg-3 d-flex align-items-end text-lg-right pr-lg-0 order-last order-lg-first">
                                   <figcaption> Legenda loren ipsum dolor Legenda loren ipsum dolor</figcaption>
                                </div>
                                <div className="col-lg-9">
                                    <div className="img-brush brush-line brush-line-top-left">
                                        <iframe
                                            width="100%"
                                            height="230"
                                            src="https://www.youtube.com/embed/k39oVsZqyDQ"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-5">
                            <div class="markup">
                                <h3>
                                    Uma vida de muitas realizações
                                </h3>
                                <p>
                                    <b>
                                        Francisco de Carvalho Soares Brandão nasceu no dia 10 de fevereiro de 1949 no
                                        Rio de Janeiro.
                                    </b>
                                </p>
                                <p>
                                    Como empresário, construiu uma história de sucesso com a FSB Comunicação,
                                    empresa fundada por ele no início dos anos 1980 e que se tornou a maior agência
                                    de comunicação corporativa da América Latina.
                                </p>
                                <p>Ao mesmo tempo em que trabalhava na empresa que leva suas iniciais no nome,
                                    Chiquinho Brandão começou a atuar, a partir de 1995, num projeto de recuperação
                                    do meio ambiente na região serrana do Estado. Amante da natureza e dos animais,
                                    especialmente dos cavalos, o empresário adquiriu um terreno no condomínio
                                    equestre Paddock para criar ali o Sítio Santo Antônio, e há mais de 25 anos vem
                                    trabalhando no reflorestamento da região.</p>

                                <p>O hipismo é outra marca importante em sua trajetória. Praticou o esporte na
                                    adolescência, na Sociedade Hípica Brasileira, participando de várias competições
                                    no final dos anos 60. Depois de muitos anos sem montar, voltou a treinar e a
                                    competir na década de 80. Em 2011, com uma grave lesão no joelho após um
                                    acidente, encerrou sua trajetória de cavaleiro e partir daí passou a investir na
                                    montagem de uma equipe de hipismo profissional, que vem obtendo resultados cada
                                    mais expressivos no cenário brasileiro e desde 2019 começou a atuar também em
                                    competições internacionais.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <LinhaTempo/>
            </main>
        </section>
    )
}

export default Historia;