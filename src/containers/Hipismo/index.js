import React from 'react';

import './styles.scss';
import PageBanner from 'components/Sections/PageBanner';
import GallerySlider from 'components/Sections/GallerySlider';

const Colecao = (props) => {
    return (
        <section className="Hipismo page-interna pb-5 mb-2 mb-lg-5">
            <PageBanner title={`Hipismo`} background={false}/>

            <main class="pt-3 pb-5 pt-lg-5 my-3 my-lg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-between flex-column pb-lg-4">
                            <figure>
                                <div className="img-brush brush-blue-3">
                                    <img src={require('../../assets/images/thumbs/hipismo-1.png')} alt=""/>
                                </div>
                                <figcaption className="text-lg-right">
                                    Legenda loren ipsum dolor Legenda loren ipsum dolor
                                </figcaption>
                            </figure>
                            <div className="row pb-lg-4">
                                <div
                                    className="col-lg-3 d-flex align-items-end text-lg-right pr-lg-0 order-last order-lg-first">
                                    <figcaption>
                                        Legenda loren ipsum dolor Legenda loren ipsum dolor</figcaption>
                                </div>
                                <div className="col-lg-9">
                                    <div className="img-brush">
                                        <img src={require('../../assets/images/thumbs/hipismo-2.png')} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-5">
                            <div class="markup pt-lg-5">
                                <h3>
                                    Título introdução
                                </h3>
                                <p>
                                    Na adolescência, Francisco começou a saltar a cavalo na Sociedade Hípica
                                    Brasileira. Mais do que apenas um esporte, o hipismo era também uma maneira de
                                    ficar próximo dos cavalos no Rio de Janeiro, e não apenas durante as férias na
                                    fazenda da família em Poços de Caldas.
                                </p>
                                <p>
                                    Com o início da vida profissional, teve que largar o esporte por muitos anos, só
                                    voltando a montar mais velho, perto dos 40 anos de idade, quando já estava bem
                                    estabelecido como empresário e pôde finalmente comprar um cavalo próprio para
                                    voltar a saltar e a competir. Nessa ocasião, passou a frequentar as aulas da
                                    amazona Lucia Faria no centro equestre Paddock, na região serrana do Rio. Em
                                    1995, o Paddock se tornou um condomínio, e foi lá que Francisco adquiriu alguns
                                    lotes e iniciou nesse mesmo ano a construção do Sítio Santo Antônio.
                                </p>

                                <blockquote>
                                    “Quando voltei a montar no início dos anos 90, já estava mais velho e saltando
                                    mais baixo, mas retomei os treinos e as provas. O hipismo foi muito importante
                                    para mim naquele momento, para me disciplinar a acordar cada vez mais cedo e ter
                                    uma vida mais saudável. Conviver com os animais e com o pessoal nas cocheiras é
                                    algo que sempre gostei de fazer, mais até do que competir.”
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="hr-line line-2"></div>
                </div>

                <div className="container-interna">
                    <div className="markup">
                        <p>
                            Em 2011, depois de um acidente que o deixou com uma grave lesão no joelho, o
                            empresário parou de saltar, e algum tempo depois passou a se dedicar à montagem
                            de uma equipe de hipismo profissional. Atualmente a equipe de salto do Santo
                            Antônio é uma das mais importantes do país, e em 2020 começa sua trajetória
                            também em competições internacionais.
                        </p>

                        <blockquote>
                            “Assim como havia começado a empresa do zero e vinha conseguindo, a partir de um
                            trabalho intenso e obstinado, realizar o projeto de torná-la – cada vez mais – a
                            melhor empresa de comunicação do país, tive a ideia de montar uma equipe de
                            hipismo verdadeiramente profissional: não só para participar das principais
                            provas em âmbito nacional, mas para poder entrar nelas competindo sempre pelos
                            primeiros lugares.”
                        </blockquote>

                        <p>
                            A receita a seguir era a mesma de sempre, que já tinha dado certo na FSB e
                            também na construção do sítio. Organizar as coisas da melhor maneira, contratar
                            gente competente para cuidar de cada setor e trabalhar com empenho em todas as
                            etapas do processo para colher os frutos mais adiante. Se até aquele momento o
                            hipismo era apenas um divertimento, Chiquinho decidiu que a partir dali iria
                            encará-lo com a mesma dedicação e a mesma obsessão por qualidade que adotava na
                            empresa, e que em alguns anos poderia formar a melhor coudelaria do Brasil.
                        </p>

                        <figure>
                            <div className="img-brush">
                                <img src={require('../../assets/images/thumbs/empreendedorismo-1.png')} alt=""/>
                            </div>
                            <figcaption>
                                Legenda loren ipsum dolor Legscacsenda loren ipsum dolor
                            </figcaption>
                        </figure>

                        <p>Com a experiência adquirida ao longo dos anos na formação e no gerenciamento
                            de boas equipes, na empresa e no sítio, para realizar com excelência os
                            trabalhos mais diversos, ele sabia que era apenas uma questão de tempo para que
                            as coisas pudessem dar certo. Se de um lado havia muitas dificuldades naquele
                            momento, especialmente por conta das limitações impostas pelo acidente, por
                            outro lado o sucesso e o crescimento da empresa davam uma segurança para
                            investir nesse novo projeto naquela altura da vida, já com mais de 60 anos. A
                            história da Coudelaria Santo Antônio é um capítulo à parte na trajetória do
                            empresário, e pode ser mais conhecida aqui.
                        </p>

                        <div className="mt-5 pt-lg-5">
                            <GallerySlider brush="top"/>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Colecao;