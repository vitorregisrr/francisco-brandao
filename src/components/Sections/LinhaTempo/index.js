import React, {useState} from 'react'
import {Element} from 'react-scroll'
import {CSSTransition} from 'react-transition-group'

import LinhaHeader from './LinhaHeader'
import LinhaBottom from './LinhaBottom'

import './styles.scss';

const LinhaTempo = () => {
    const [current,
        setCurrent] = useState(0);

    const Content0 = () => (
        <div>
            <h3 className="LinhaTempo__title">
                Origens
            </h3>
            <div className="markup">
                <h4>
                    Primeiro emprego
                </h4>

                <p>
                    No último ano do Clássico, no Andrews, Chiquinho ficou de segunda época e sua
                    mãe resolveu que ele teria que trabalhar para pagar as aulas particulares. Ela
                    arranjou um estágio para ele durante o verão na Carioca Engenharia, cujo
                    escritório ficava na rua Senador Dantas, no Centro.
                </p>
                <p>Uma das funções do estagiário era ficar de apontador no Cais do Porto, onde
                    estavam fazendo um aterro. O trabalho era contar os caminhões e controlar
                    quantos metros cúbicos de areia entravam ali diariamente. Depois de passar o dia
                    conferindo aquela terra, ele saía com os donos da construtora, Ricardo
                    Backheuser e Carlinhos Gebara, para acompanhar as obras que eles tocavam pelo
                    subúrbio. Ainda dava para fazer um lanche nos botequins mais distantes, antes de
                    voltar para casa. O maior luxo nessa atividade era quando paravam para comer no
                    Bob’s da Avenida Brasil.
                </p>
                <p>Cumprido o estágio e formado no colégio, veio o vestibular. Chiquinho tentou
                    o curso de Economia, mas não passou, e acabou ingressando na faculdade de
                    Direito na PUC.</p>

                <h4>
                    Direito
                </h4>

                <p>
                    Logo que entrou na universidade, Chiquinho iniciou também um estágio no
                    escritório de advocacia do seu pai, no centro da cidade. Saía diariamente para
                    ir ao fórum, onde acompanhava os processos da Casa São Luiz para a Velhice. Eram
                    ações de cobrança ou de despejo, e a rotina era seguir de vara em vara vendo
                    como estava cada processo. Tanto o trabalho no escritório quanto as aulas na
                    faculdade serviram apenas para descobrir que não era aquela a profissão que
                    queria seguir.
                </p>

                <blockquote>“Eu não gostava daquele trabalho, nem das aulas na universidade. E
                    acho que uma das coisas mais importantes da vida é a pessoa descobrir o que
                    gosta de fazer: quando a gente entra numa trilha errada, ou quando colocam a
                    gente para fazer algo que não gosta, é mais difícil realizar uma coisa
                    bem-feita.”</blockquote>

                <p>Acabou ficando três anos na PUC, frequentando pouquíssimo as aulas, até
                    largar os estudos. Antes disso já tinha pedido dispensa do estágio no escritório
                    para buscar novos caminhos profissionais.</p>

                <h4>Turismo</h4>
                <p>
                    O primeiro emprego depois de sair do escritório de advocacia foi numa agência de
                    turismo, a Lugitur, que pertencia a seu amigo Fernando Hermanny. Depois de quase
                    um ano na Lugitur, Chiquinho foi convidado por outros dois amigos, Bento
                    Figueira de Mello e Cristiano Kerti, para montar um negócio próprio. Eles tinham
                    uma corretora e estavam investindo em um conglomerado para atuar também em
                    outras áreas.
                </p>

                <figure>
                    <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    <figcaption>
                        No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                        bastidores do turismo”, 26/8/1971.
                    </figcaption>
                </figure>

                <p>
                    Assim surgiu a BCF Turismo do Brasil, juntando as iniciais dos três sócios:
                    Bento, Cristiano e Francisco. Foi a primeira tentativa como empresário. Mesmo
                    sem falar nenhuma outra língua, Chiquinho passou a trabalhar na administração do
                    negócio, vendendo passagens e atendendo os clientes. O escritório da BCF
                    funcionava como um anexo da Marko Distribuidora de Valores, na Avenida Nilo
                    Peçanha, e a empresa prosperou bastante naqueles primeiros anos.
                </p>
                <p>
                    Até que surgiu uma oportunidade de ir para a Europa com uma bolsa de estudos
                    para fazer um curso de turismo na Espanha, no Instituto de Estudos Turísticos de
                    Madri. Chiquinho embarcou para essa temporada europeia junto com seu amigo e
                    compadre Carlos Borges, vizinho desde que a família tinha se mudado para a Gávea
                    e companheiro de muitos fins de semana em Angra dos Reis, onde ele tinha casa.
                    Carlos Borges estava começando a trabalhar também no ramo do turismo, e alguns
                    anos depois iria montar uma rede de empreendimentos imobiliários em Angra dos
                    Reis de muito sucesso, incluindo o Hotel do Frade. Depois de terminado o curso,
                    os dois amigos ainda passaram alguns meses viajando por diversos países da
                    Europa.
                </p>

                <figure>
                    <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    <figcaption>
                        Com o amigo Carlos Borges na viagem pela Europa, em 1972.
                    </figcaption>
                </figure>

                <h4>Boemia Carioca</h4>
                <p>As noites do Rio de Janeiro eram bastante animadas nessa época da juventude,
                    e sempre havia um programa para fazer e novos amigos para conhecer. Chiquinho
                    gostava de frequentar as boates, como o Sashinha, no Leme, o Zum-Zum e o Le
                    Bateau. Em meados dos anos 70 surgiu em Ipanema o Hippopotamus, do Ricardo
                    Amaral, que se tornou a referência de clube noturno na cidade.</p>

                <p>Entre os restaurantes, havia o Nino’s, em Copacabana, e também o Clube
                    Gourmet, em Botafogo, do chef José Hugo Celidônio e da sua esposa Marialice, com
                    quem Chiquinho fez amizade. Outro lugar muito frequentado era o Antonio’s, no
                    Leblon, reduto dos artistas, jornalistas e intelectuais, e ponto de encontro de
                    uma turma grande de boêmios que vivia por ali.</p>

                <blockquote>
                    “Gosto de gente de todo tipo e de todas as idades, de mamando a caducando.
                    Conhecer gente, conversar, aprender com as histórias dos outros, sempre foi o
                    meu programa predileto.”
                </blockquote>

                <p>No Hippopotamus, Chiquinho fez amizade com os anfitriões, Ricardo e Gisella
                    Amaral, e sempre tinha um convite para entrar. Foi lá que ele conheceu e
                    conviveu com Danuza Leão, Olavo Monteiro de Carvalho, Rodolfo Garcia, Sebastião
                    Lacerda e Zózimo Barrozo do Amaral, ganhou vários amigos para a vida toda, e
                    também se tornou uma figura fácil nas colunas sociais. A conversa ia longe nas
                    varandas do Hippo, muitas vezes até o amanhecer, quando as barracas da feira já
                    estavam sendo montadas logo em frente, na Praça Nossa Senhora da Paz, em
                    Ipanema.</p>

                <figure>
                    <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    <figcaption>
                        Verão com um grupo de amigos em Punta del Este nos anos 80: Martin Braun,
                        Helena, Rosa May, Fernão, Renata, José, Manuel Lamarca, Eduardo Berenbau e Lalia
                        Amorim.
                    </figcaption>
                </figure>

                <p>Nos fins de semana, o programa era ir para Angra, Búzios, ou Teresópolis.
                    Búzios era uma vila de pescadores, ainda pouco frequentada, e a turma costumava
                    se reunir para alugar alguma casa na beira da praia. Em Teresópolis, Chiquinho
                    costumava ficar hospedado na casa de seu amigo Luiz Eduardo Guinle, construída
                    pelo seu pai, o dr. Octavio Guinle, que também tinha construído o Copacabana
                    Palace. Nas férias, muitas vezes Chiquinho ia para Punta del Este, no Uruguai,
                    com um grupo de amigos. Luís Oswaldo Pastore, Fernão Lara Mesquita e Rosa May
                    Sampaio, além da uruguaia Laila Amorim e do argentino Manuel Lamarca, eram
                    companheiros constantes nessas viagens.</p>
            </div>
        </div>
    )

    const Content1 = () => (
        <div>
             <h3 className="LinhaTempo__title">
                Infância
            </h3>
            <div className="markup">

                <p>
                    No último ano do Clássico, no Andrews, Chiquinho ficou de segunda época e sua
                    mãe resolveu que ele teria que trabalhar para pagar as aulas particulares. Ela
                    arranjou um estágio para ele durante o verão na Carioca Engenharia, cujo
                    escritório ficava na rua Senador Dantas, no Centro.
                </p>
                <p>Uma das funções do estagiário era ficar de apontador no Cais do Porto, onde
                    estavam fazendo um aterro. O trabalho era contar os caminhões e controlar
                    quantos metros cúbicos de areia entravam ali diariamente. Depois de passar o dia
                    conferindo aquela terra, ele saía com os donos da construtora, Ricardo
                    Backheuser e Carlinhos Gebara, para acompanhar as obras que eles tocavam pelo
                    subúrbio. Ainda dava para fazer um lanche nos botequins mais distantes, antes de
                    voltar para casa. O maior luxo nessa atividade era quando paravam para comer no
                    Bob’s da Avenida Brasil.
                </p>
                <p>Cumprido o estágio e formado no colégio, veio o vestibular. Chiquinho tentou
                    o curso de Economia, mas não passou, e acabou ingressando na faculdade de
                    Direito na PUC.</p>
            </div>
        </div>

    )

    const Content2 = () => (
        <div>
             <h3 className="LinhaTempo__title">
                Juventude
            </h3>
            <div className="markup">
                <h3>
                     Juventude
                </h3>

                <p>
                    No último ano do Clássico, no Andrews, Chiquinho ficou de segunda época e sua
                    mãe resolveu que ele teria que trabalhar para pagar as aulas particulares. Ela
                    arranjou um estágio para ele durante o verão na Carioca Engenharia, cujo
                    escritório ficava na rua Senador Dantas, no Centro.
                </p>
                <p>Uma das funções do estagiário era ficar de apontador no Cais do Porto, onde
                    estavam fazendo um aterro. O trabalho era contar os caminhões e controlar
                    quantos metros cúbicos de areia entravam ali diariamente. Depois de passar o dia
                    conferindo aquela terra, ele saía com os donos da construtora, Ricardo
                    Backheuser e Carlinhos Gebara, para acompanhar as obras que eles tocavam pelo
                    subúrbio. Ainda dava para fazer um lanche nos botequins mais distantes, antes de
                    voltar para casa. O maior luxo nessa atividade era quando paravam para comer no
                    Bob’s da Avenida Brasil.
                </p>
                <p>Cumprido o estágio e formado no colégio, veio o vestibular. Chiquinho tentou
                    o curso de Economia, mas não passou, e acabou ingressando na faculdade de
                    Direito na PUC.</p>
            </div>
        </div>
    )

    const Content3 = () => (
        <div>
             <h3 className="LinhaTempo__title">
                Vida Adulta
            </h3>
            <div className="markup">
                <h3>
                     Vida Adulta
                </h3>

                <p>
                    No último ano do Clássico, no Andrews, Chiquinho ficou de segunda época e sua
                    mãe resolveu que ele teria que trabalhar para pagar as aulas particulares. Ela
                    arranjou um estágio para ele durante o verão na Carioca Engenharia, cujo
                    escritório ficava na rua Senador Dantas, no Centro.
                </p>
                <p>Uma das funções do estagiário era ficar de apontador no Cais do Porto, onde
                    estavam fazendo um aterro. O trabalho era contar os caminhões e controlar
                    quantos metros cúbicos de areia entravam ali diariamente. Depois de passar o dia
                    conferindo aquela terra, ele saía com os donos da construtora, Ricardo
                    Backheuser e Carlinhos Gebara, para acompanhar as obras que eles tocavam pelo
                    subúrbio. Ainda dava para fazer um lanche nos botequins mais distantes, antes de
                    voltar para casa. O maior luxo nessa atividade era quando paravam para comer no
                    Bob’s da Avenida Brasil.
                </p>
                <p>Cumprido o estágio e formado no colégio, veio o vestibular. Chiquinho tentou
                    o curso de Economia, mas não passou, e acabou ingressando na faculdade de
                    Direito na PUC.</p>
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