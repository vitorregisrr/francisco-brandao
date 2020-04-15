import React from 'react';

import './styles.scss';
import PageBanner from 'components/Sections/PageBanner';
import GallerySlider from 'components/Sections/GallerySlider';

const MeioAmbiente = (props) => {
    return (
        <section className="MeioAmbiente page-interna pb-5 mb-2 mb-lg-5">
            <PageBanner title={`Meio Ambiente`} background={false}/>
            <main class="pt-3 pb-5 pt-lg-5 my-3 my-lg-5">
                <div className="container pt-lg-5">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-between flex-column pb-lg-4">
                            <figure className="my-4 my-lg-0">
                                <div
                                    className="img-brush brush-blue-spiral d-flex justify-content-center justify-content-lg-end">
                                    <img
                                        src={require('../../assets/images/thumbs/meioambiente-1.png')}
                                        alt=""
                                        style={{
                                        width: '73%'
                                    }}/>
                                </div>
                                <figcaption className="text-lg-right">
                                    Legenda loren ipsum dolor Legenda loren ipsum dolor
                                </figcaption>
                            </figure>
                            <div className="row pb-lg-4">
                                <div
                                    className="col-lg-3 d-flex align-items-end text-lg-right pr-lg-0 order-last order-lg-first"></div>
                                <div className="col-lg-9">
                                    <figure>
                                        <div className="img-brush">
                                            <img src={require('../../assets/images/thumbs/meioambiente-2.png')} alt=""/>
                                        </div>
                                        <figcaption className="text-lg-right">
                                            Legenda loren ipsum dolor Legenda loren ipsum dolor</figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-5">
                            <div class="markup">
                                <h3>
                                    Título introdução
                                </h3>
                                <p>
                                    A paixão pelos animais começou na infância, nas férias que passava na Fazenda
                                    Recreio, em Poços de Caldas, onde Chiquinho aprendeu a montar ainda bem
                                    pequeno. Também foi nessa fazenda da família, junto com a avó Mathilde e seus
                                    primos, que aprendeu a gostar dos bichos e da natureza.
                                </p>
                                <p>
                                    O sonho de criança, de um dia ter sua própria fazenda, começou a se tornar
                                    realidade em 1995. Sua professora de hipismo, a amazona Lucia Faria, montou um
                                    centro de treinamento equestre – o Paddock – perto de Petrópolis, na região
                                    serrana do Rio, junto com o marido, o cavaleiro Antônio Alegria Simões. Naquele
                                    ano, o casal resolveu lotear o terreno do Paddock para criar ali um condomínio
                                    que pudesse aproveitar a estrutura do centro.
                                </p>
                                <p>
                                    Com a compra de quatro lotes no condomínio naquele mesmo ano, Francisco começou
                                    a construção do Sítio Santo Antônio, com um projeto de recuperação da natureza
                                    no local. Depois de mais 25 anos de um intenso trabalho de reflorestamento,
                                    desde a preparação do solo até o plantio de milhares de árvores frutíferas,
                                    passando por uma ampla obra de engenharia para a captação de água e irrigação do
                                    terreno e por diversas etapas de expansão da propriedade, o local se tornou um
                                    verdadeiro oásis para a fauna e a flora da região.</p>
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
                                <img src={require('../../assets/images/thumbs/empreendedorismo-1.png')} alt=""/>
                            </div>
                            <figcaption>
                                Legenda loren ipsum dolor Legscacsenda loren ipsum dolor
                            </figcaption>
                        </figure>
                        <h4>
                            Plnejamento e construção
                        </h4>
                        <p>
                            Toda a filosofia de organização e planejamento que implementada na empresa ao
                            longo dos anos valeu muito na hora de construir o sítio. Naquela altura da vida,
                            com a confiança de ver a receita dando certo nos negócios, Chiquinho começou a
                            organizar o projeto de reflorestamento já prevendo a construção de uma nova
                            casa, o espaço para os animais e o crescimento das plantações.
                        </p>

                        <p>
                            O início não foi fácil. Era uma obra enorme, vinha pedra para o calçamento,
                            madeira para o acabamento, vinham os tratores para mover a terra de um lado para
                            o outro. Aos poucos o projeto ia sendo ajustado e a coisa ia tomando forma.
                        </p>

                        <p>
                            Havia uma área no alto do terreno com uma vista deslumbrante e ao mesmo tempo
                            com uma privacidade total, mesmo sendo bastante próxima da estrada. Ali parece
                            um lugar ermo, mas na verdade está muito perto da civilização. Mas era um local
                            de muita erosão para baixo do morro, um verdadeiro buraco, que tinha virado uma
                            lixeira: ali era jogado todo o lixo do condomínio, junto com os restos dos
                            cavalos. Quando Chiquinho comprou aquele lote, pensou logo que ali seria o ponto
                            ideal para construir uma casa maior no futuro, com uma bela vista para os dois
                            lados. Na base do trator e da escavadeira, uma parte do morro ao lado foi
                            retirada para aterrar toda aquela área, que hoje está completamente plantada e
                            virou um jardim cheio de árvores frutíferas. E com o tempo, pôde finalmente
                            construir a casa principal, com uma bela vista para os vales logo em frente. A
                            primeira casinha, um pouco mais abaixo, virou uma casa de hóspedes.
                        </p>

                        <figure>
                            <div className="img-brush brush-line brush-line-bottom-right-7">
                                <img src={require('../../assets/images/thumbs/meioambiente-4.png')} alt=""/>
                            </div>
                            <figcaption>
                                Legenda loren ipsum dolor Legscacsenda loren ipsum dolor
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div className="container">
                    <figure>
                        <div className="img-brush">
                            <img src={require('../../assets/images/thumbs/meioambiente-3.png')} alt=""/>
                        </div>
                        <figcaption>
                            Legenda loren ipsum dolor Legscacsenda loren ipsum dolor
                        </figcaption>
                    </figure>
                </div>

                <div className="container-interna">
                    <div className="markup">
                        <p>
                            Ao longo dos caminhos e das trilhas, foram instalados pequenos cochos, pocinhos
                            de água para os animais, onde os pássaros e os bichos vêm beber. Chiquinho
                            conhece cada árvore do terreno, a maioria delas plantadas por ele mesmo, algumas
                            há mais de 20 anos. Um passeio por esses caminhos com tanta planta e tanto bicho
                            em volta é sem dúvida um prazer especial, uma realização única.
                        </p>

                        <p>
                            A paixão pelos bichos vem desde a infância, a começar pela convivência com os
                            animais na Fazenda Recreio, em Poços de Caldas, onde ele passava as férias. O
                            projeto do sítio, desde o início, já tinha em vista a construção de um habitat
                            adequado para receber os animais: tanto a plantação da mata – cheia de árvores
                            frutíferas, de modo a não faltar alimento para as aves e os bichos silvestres
                            que pudessem ser atraídos para o local –, quanto os espaços para os viveiros, os
                            currais, as cocheiras e os pastos para diversas criações.
                        </p>

                        <blockquote>
                            “Gosto de bicho solto, de ver os bichos bem tratados, bem alimentados, bem
                            cuidados. Hoje, com as construções todas prontas e muitas plantas e árvores já
                            crescidas, o sítio é uma morada confortável para uma enorme variedade de animais
                            e de aves.”
                        </blockquote>

                        <p>Aos poucos ele foi construindo assim essa fazendinha, começando pelos cavalos
                            e trazendo aos poucos os bois, os carneiros, os cabritos, as galinhas, os
                            coelhos… Chiquinho contou ainda com a ajuda do seu tio Moacyr Carvalho Dias, o
                            Xixo, em várias etapas desse processo. O tio Xixo construiu em Poços de Caldas
                            um dos maiores criatórios de animais silvestres do Brasil, com milhares de aves
                            das mais variadas espécies, e sua experiência ajudou a formatar o projeto de um
                            criatório conservacionista no Sítio Santo Antônio, seguindo os procedimentos
                            necessários junto ao Ibama ao longo desses anos para organizar bem a estrutura.
                        </p>

                        <figure>
                            <div className="img-brush">
                                <img src={require('../../assets/images/thumbs/empreendedorismo-1.png')} alt=""/>
                            </div>

                            <figcaption>
                                No alto do terreno fica a criação de gado leiteiro.
                            </figcaption>
                        </figure>

                        <p>
                            Depois de toda a preparação do terreno e do solo, e com mais de vinte anos de
                            trabalho intenso e diário para cuidar das plantações, caminhar pelo sítio Santo
                            Antônio é como passear numa mistura de jardim botânico com um minizoológico,
                            cheio de pastos e viveiros e também com uma grande quantidade de bichos soltos
                            pelos caminhos e pela mata.
                        </p>

                        <GallerySlider brush="bottom"/>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default MeioAmbiente
