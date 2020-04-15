import React from 'react';

import './styles.scss';
import PageBanner from 'components/Sections/PageBanner';

const Empreendedorismo = (props) => {
    return (
        <section className="Empreendedorismo page-interna pb-4 mb-2 mb-lg-5">
            <PageBanner title={`Empreendedorismo`} background={false}/>
            <main class="pt-3 pb-5 pt-lg-5 my-3 my-lg-5">
                <div className="container pt-lg-5">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-between flex-column pb-lg-4">
                            <figure className="my-4 my-lg-0">
                                <div className="img-brush brush-orange">
                                    <img src={require('../../assets/images/thumbs/empreendedorismo-1.png')} alt=""/>
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
                                        <img src={require('../../assets/images/thumbs/empreendedorismo-2.png')} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-5">
                            <div class="markup pt-4 pt-lg-1">
                                <h3>
                                    Título introdução
                                </h3>
                                <p>
                                    Desde a juventude, Francisco Soares Brandão sempre gostou de empreender, de
                                    construir. No início de sua vida profissional, foi sócio de uma agência de
                                    viagens, a BCF, que fundou junto com os amigos Bento Figueira de Mello e
                                    Cristiano Kerti. Em 1975 se associou ao estilista argentino Manuel Lamarca para
                                    criar uma grife de moda. Responsável pela administração da empresa, Francisco
                                    promoveu diversos eventos e desfiles para divulgação da marca, primeiro no
                                    Golden Room do Copacabana Palace, no Rio, e depois também em outras cidades do
                                    país, com ampla repercussão na imprensa.
                                </p>
                                <p>
                                    Em 1982, fundou a Promoshow, empresa voltada para a promoção de eventos.
                                    Estabeleceu uma parceria com a agência de publicidade Ellis&Associados durante
                                    dois anos, até que encontrou um modelo de negócios inovador e até então pouco
                                    explorado, na área da assessoria de comunicação corporativa. Foi quando instalou
                                    a sede da empresa no terceiro andar do Edifício Ipanema 2000 e mudou o nome para
                                    caracterizar a nova atividade. Nascia ali, com as iniciais do seu fundador, a
                                    FSB Comunicação.
                                </p>

                                <blockquote>
                                    “Quando percebi que podia oferecer aos clientes uma alternativa mais barata e
                                    mais eficaz do que a publicidade tradicional, procurando soluções para o negócio
                                    deles através da mídia editorial, vi que tinha encontrado um novo rumo.”
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-interna">
                    <div className="markup">
                        <p>
                            Com a filosofia de buscar sempre os melhores profissionais, promover
                            relacionamentos e reunir gente competente para atender melhor os clientes, a FSB
                            foi uma pioneira no setor, acompanhou as mudanças na área da comunicação ao
                            longo dos últimos 40 anos e cresceu ao longo da “era da informação” até se
                            consolidar como líder nesse mercado no Brasil e na América Latina.
                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className="hr-line line-1"></div>
                </div>

                <div className="container-interna">
                    <div className="markup">
                        <h4>
                            Do telex ao smartphone
                        </h4>
                        <p>
                            Quando a empresa iniciou suas atividades, no início dos anos 80, ainda era
                            difícil conseguir linha para falar no telefone no Rio de Janeiro. A estrutura
                            ainda era muito pequena, só tinha uma assistente e uma secretária. Chiquinho
                            passava a maior parte do tempo na rua, encontrando gente e visitando
                            pessoalmente as redações.
                        </p>

                        <p>
                            Logo que começou o trabalho para a Xerox, a FSB passou a ter maior facilidade de
                            conhecer e obter em primeira mão os novos equipamentos que surgiam – não só as
                            copiadoras, mas também os aparelhos de fax. Os clientes ficavam admirados quando
                            viam equipamento tão modernos, de última geração. Nesse meio tempo surgiu o
                            computador e tudo mudou. Até então todo o trabalho era feito nas máquinas de
                            escrever, que logo se tornariam obsoletas.
                        </p>
                        <p>
                            Na Ellis & Associados havia quatro linhas telefônicas e um PABX. Depois que
                            desfez a sociedade com a agência de publicidade, a FSB passou a ter quatro
                            números de telefone exclusivos, além de investir num telex – que era o que havia
                            de mais veloz para a transmissão de informações. A seguir apareceu o fax, uma
                            grande novidade na época. Nesse momento Chiquinho conseguiu ganhar uma conta
                            importantíssima para a empresa: a Xerox do Brasil. Ela fabricava copiadoras e
                            tinha praticamente uma reserva de mercado no país, que era um dos maiores
                            mercados da empresa no mundo. A marca virou sinônimo de copiadora.
                        </p>

                        <blockquote>
                            “Na minha cabeça, a tecnologia sempre foi um meio, nunca foi um fim. O que
                            resolve de verdade são as ideias que passam pela cabeça das pessoas. Hoje você
                            tem robôs, programas de computador, pesquisa com a palavra-chave, mas o que mais
                            importa ainda são as cabeças, é a qualificação, o lado humano por trás da coisa
                            toda.”
                        </blockquote>

                        <p>
                            Nessa altura a empresa já tinha um novo sócio, Marcos Trindade, que entrou como
                            contador, tonou-se o principal assistente de Chiquinho e logo ganhou
                            participação na sociedade, ajudando na construção e na expansão da FSB desde
                            então. Os dois foram juntos a uma feira de informática no Anhembi, em São Paulo,
                            para ver de perto a novidade do computador, e naquele momento decidiram fazer
                            uma transformação no escritório para informatizar a empresa. Sob o comando do
                            Marcos, com a ajuda de Maria Luiza Viegas, foi iniciado o processo de
                            informatização na FSB, que rapidamente passou da máquina de escrever para o
                            computador. Logo depois surgiu o computador portátil, e começaram a utilizar um
                            laptop para as reuniões externas.
                        </p>

                        <figure>
                            <div className="img-brush">
                                <img src={require('../../assets/images/thumbs/empreendedorismo-1.png')} alt=""/>
                            </div>
                            <figcaption>
                                Legenda loren ipsum dolor Legscacsenda loren ipsum dolor
                            </figcaption>
                        </figure>

                        <p>Hoje, na era do smartphone e da videoconferência, ninguém precisa mais pegar
                            um avião para ter uma reunião presencial e todos os escritórios estão
                            interligados. Com a revolução da era digital, houve uma transformação tão grande
                            e tão rápida que a forma tradicional de comunicação com a massa, através dos
                            jornais, do rádio e da TV, virou algo muito diverso. E a empresa soube
                            acompanhar essas mudanças.
                        </p>

                        <h4>Receita de sucesso</h4>
                        <p>
                            Para entender o sucesso da FSB, a palavra-chave é “gente”. Desde o início, o
                            empresário sempre soube que não dá para construir nada sozinho: é preciso se
                            cercar de pessoas competentes, capazes e dedicadas, para conseguir bons
                            resultados – no trabalho e na vida. Consciente de suas limitações em muitas
                            áreas, Chiquinho procurou contratar os melhores profissionais do mercado para
                            agregar valor ao seu negócio, e essa foi uma aposta que deu certo.</p>

                        <blockquote>
                            “A melhor gestão é poder se cercar de gente boa. Gente mais competente que a
                            gente, para entregar sempre mais para o cliente.”
                        </blockquote>

                        <p>
                            Esta é uma receita simples e infalível. A empresa ganha ao investir na
                            contratação de pessoas talentosas e qualificadas, o profissional ganha quando
                            tem seu trabalho reconhecido e valorizado, e assim o cliente também ganha, pois
                            tem várias cabeças boas trabalhando juntas para buscar as melhores soluções para
                            ele.
                        </p>

                        <p>
                            Chiquinho é muito obsessivo e busca sempre a máxima qualidade em tudo que faz,
                            nos mínimos detalhes, e por isso o nível de exigência na empresa é alto e o grau
                            de cobrança é enorme. Ele não abre mão desse perfeccionismo, atento até o último
                            grau para buscar as melhores soluções para os clientes. Para o empresário, o
                            detalhe faz toda a diferença. Gosta de cumprir e de ver cumpridas todas as
                            tarefas no menor tempo possível, com total clareza e objetividade: problema é
                            igual a solução, e quanto mais simples e rápida, melhor.
                        </p>

                        <p>
                            Hoje a FSB tem mais de 800 colaboradores, e alguns deles viraram sócios pelo
                            caminho. Chiquinho sempre gostou da ideia de compartilhar os resultados, e nada
                            melhor para um negócio prosperar do que fazer com que as pessoas que trabalham
                            ali sintam que a empresa também é delas. Para isso é importante saber reconhecer
                            o valor de cada um, estimulando a produtividade, abrindo caminho para que possam
                            também crescer junto. Não tem invenção: quando as pessoas veem seu trabalho
                            reconhecido, dentro de um espírito colaborativo de equipe, elas vão produzir
                            cada vez melhor. Individualmente e em conjunto. E a história da FSB foi
                            construída por toda essa gente, por cada profissional que ajudou a empresa a
                            crescer ao longo de todos esses anos.
                        </p>

                        <figure>
                            <div className="img-brush">
                                <img src={require('../../assets/images/thumbs/empreendedorismo-1.png')} alt=""/>
                            </div>
                            <figcaption>
                                Legenda loren ipsum dolor Legscacsenda loren ipsum dolor
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Empreendedorismo;