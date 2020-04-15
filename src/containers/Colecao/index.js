import React from 'react'

import './styles.scss'
import PageBanner from 'components/Sections/PageBanner'
import GaleriaArtes from 'components/Sections/GaleriaArtes'

const Colecao = (props) => {
    return (
        <section className="Colecao page-interna">
            <PageBanner title={`Coleção de Arte`} background={false}/>

            <main class="py-5 my-3 my-lg-5">
                <div className="container-interna">
                    <div className="img-brush brush-yellow">
                        <img src={require('../../assets/images/thumbs/colecao-1.png')} alt=""/>
                    </div>

                    <p className="citacao-red mt-4">
                        “Eu era amigo da Regina Clara Simões Lopes, uma pintora de quem gostava muito, e
                        comprei dela esse primeiro quadro. A partir dali, em cada sala que a empresa ia
                        abrindo eu investia em um quadro novo, e ao longo de todos esses anos acabei
                        montando aos poucos uma boa coleção particular de arte contemporânea, que tenho
                        muito prazer de ver exposta nas paredes dos escritórios da empresa.”
                    </p>

                    <p className="mt-5 pt-lg-5">
                        Ao todo, são
                        <b>mais de 300 obras de artes</b>
                        que você pode ver abaixo.
                    </p>
                </div>

                <GaleriaArtes/>

                <div className="container-interna">
                    <h3 className="title-brush-red">
                        Um pouco de Arte
                    </h3>

                    <p>
                        Desde que abriu o primeiro escritório da FSB, Francisco Brandão tem a
                        preocupação de cuidar de cada detalhe do ambiente de trabalho. O empresário fez
                        amizade com vários artistas plásticos da sua geração, como Angelo de Aquino,
                        Ivald Granato e Rubens Gershman, entre outros.
                    </p>

                    <figure className="py-1 py-lg-5 mb-3">
                        <img src={require('../../assets/images/thumbs/colecao-2.png')} alt=""/>
                        <figcaption>
                            Legenda loren ipsum dolor
                            <br/>
                            Legenda loren ipsum dolor
                        </figcaption>
                    </figure>
                </div>

                <div className="container container-large mb-0 mb-lg-4">
                    <div className="row">
                        <div className="col-lg-7">
                            <figure>
                                <div className="img-brush brush-line brush-line-bottom-left-2">
                                    <img src={require('../../assets/images/thumbs/colecao-3.png')} alt=""/>
                                </div>
                                <figcaption className="text-right arte">
                                    Nome da obra, 2012
                                    <span>Nome do autor</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-5">
                            <figure>
                                <div className="img-brush brush-line brush-line-top-right-2">
                                    <img src={require('../../assets/images/thumbs/colecao-4.png')} alt=""/>
                                </div>
                                <figcaption className="arte">
                                    Nome da obra, 2012
                                    <span>Nome do autor</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>

                <div className="container-interna py-2">
                    <p className="mb-lg-5">
                        Muitas vezes ele fazia permutas com os artistas, trabalhando em sua assessoria
                        de comunicação em troca de alguma obra. E assim, ao longo dos anos, foi montando
                        uma expressiva coleção particular de arte contemporânea, que reúne nomes como
                        Daniel Azulay, Luiz Áquila, Renato Meziat, Eduardo Sued e José Bechara. A maior
                        parte dessas obras está hoje exposta nas paredes dos escritórios da FSB, no Rio
                        de Janeiro, São Paulo, Brasília, Campinas e Nova York, e também fica aqui
                        reunida nesta galeria virtual.
                    </p>

                    <figure className="mb-5">
                        <div className="img-brush brush-line brush-line-bottom-right-5">
                            <img src={require('../../assets/images/thumbs/colecao-5.png')} alt=""/>
                        </div>
                        <figcaption className="arte">
                            Nome da obra, 2012
                            <span>Nome do autor</span>
                        </figcaption>
                    </figure>
                </div>
            </main>
        </section>
    )
}

export default Colecao;