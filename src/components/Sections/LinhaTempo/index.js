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
                <h4>De Francisco a Chiquinho</h4>
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

                <figure>
                    <div className="img-brush brush-line-top-left">
                        <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    </div>
                    <figcaption>
                        No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                        bastidores do turismo”, 26/8/1971.
                    </figcaption>
                </figure>

                <figure>
                    <div className="img-brush brush-line-bottom-right-sm">
                        <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    </div>
                    <figcaption>
                        No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                        bastidores do turismo”, 26/8/1971.
                    </figcaption>
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
                <h4>Título Introdução</h4>
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

                <figure>
                    <div className="img-brush brush-line-top-left">
                        <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    </div>
                    <figcaption>
                        No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                        bastidores do turismo”, 26/8/1971.
                    </figcaption>
                </figure>

                <figure>
                    <div className="img-brush brush-line-bottom-right-sm">
                        <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    </div>
                    <figcaption>
                        No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                        bastidores do turismo”, 26/8/1971.
                    </figcaption>
                </figure>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nobis ducimus
                    libero, magnam sed perferendis quibusdam odit voluptate, alias cumque quos
                    consequatur mollitia veniam. Quo impedit blanditiis odit aperiam alias cum
                    aliquid corrupti, laudantium molestias placeat iste facilis soluta et repellat
                    atque praesentium consectetur voluptatibus, est iusto possimus? Maiores atque
                    natus rem, id tempore odit. Voluptate ullam quasi minus ducimus!
                </p>

                <blockquote>
                    “Meu tio José Bento de Carvalho Dias era um homem com muita visão de futuro,
                    tinha o empreendedorismo no sangue: sempre otimista, sempre olhando para a
                    frente e sempre querendo progredir. Foi uma das maiores influências positivas
                    que pude trazer para o trabalho e para a vida.”
                </blockquote>

                <p>
                    Os almoços de domingo no Rio eram sempre na casa da tia Zizita, na Rua Gomes
                    Carneiro, em Ipanema, onde moravam os tios mais novos, Lindolpho e Gabriel.
                    Depois ia visitar a avó Sophia e as tias paternas em Botafogo. Nesses passeios
                    de carro pela cidade com seus pais, Chiquinho achava que nunca seria capaz de
                    andar sozinho e encontrar o caminho de casa. Não sabia diferenciar direita e
                    esquerda, norte e sul, não tinha nenhum senso de orientação. Na escola sempre
                    foi um dos piores alunos. Depois de terminar o primário no Colégio Souza Leão,
                    entrou para o Santo Inácio, uma das escolas mais tradicionais do Rio de Janeiro
                    – que na época era exclusivamente masculino. Ali fez muitas amizades que ficaram
                    pela vida toda, mas o desempenho nos estudos não foi dos melhores e ele acabou
                    seguindo para terminar o ginásio no internato marista Nossa Senhora Auxiliadora,
                    em Campinas, onde também estudavam seus primos Marcos, Guilherme e Maurício.
                </p>

                <figure>
                    <div className="img-brush brush-line-bottom-right-sm-2">
                        <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    </div>
                    <figcaption>
                        No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                        bastidores do turismo”, 26/8/1971.
                    </figcaption>
                </figure>

                <p>
                    De volta ao Rio para cursar o equivalente ao ensino médio de hoje, foi para o
                    colégio Andrews, em Botafogo. Na época havia duas opções para os alunos,
                    dependendo da área acadêmica preferida: o clássico e o científico. Como era
                    muito fraco nas ciências exatas, em química e matemática, e não pretendia cursar
                    engenharia ou medicina, Chiquinho optou pelo clássico e depois prestou
                    vestibular para Direito.
                </p>

                <h4>
                    Hípica
                </h4>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat temporibus
                    deleniti corporis numquam quae atque distinctio dolor! Quidem animi accusamus
                    earum culpa quod quisquam odio error sint fugit amet ipsum dolorem, adipisci
                    labore nostrum maiores voluptatem architecto totam ea numquam?
                </p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laboriosam
                    doloribus rerum qui voluptas. Ipsa doloremque excepturi itaque quae! Corporis
                    molestiae necessitatibus ex dicta, impedit suscipit cumque. Rem culpa at magnam
                    nemo numquam, neque, a consequatur modi, obcaecati eos velit?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo itaque
                    laboriosam ipsa. Sunt, maiores debitis ipsum similique officia quia dolorum
                    laboriosam quasi harum, tempore eveniet quis itaque dolores hic voluptatum.</p>

                <figure>
                    <div className="img-brush brush-line-bottom-right-sm">
                        <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    </div>
                    <figcaption>
                        No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                        bastidores do turismo”, 26/8/1971.
                    </figcaption>
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
                    <div className="img-brush brush-line-bottom-right-md">
                        <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    </div>
                    <figcaption>
                        No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                        bastidores do turismo”, 26/8/1971.
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

                <figure>
                    <div className="img-brush brush-line-bottom-right-lg">
                        <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    </div>
                    <figcaption>
                        No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                        bastidores do turismo”, 26/8/1971.
                    </figcaption>
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
                    Inventando Moedas
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
                <div className="row">
                    <div className="col-lg-6">
                        <figure>
                            <div className="img-brush brush-line-bottom-left">
                                <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                            </div>
                            <figcaption class="text-lg-right">
                                No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                                bastidores do turismo”, 26/8/1971.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <figure>
                            <div className="img-brush">
                                <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                            </div>
                            <figcaption>
                                No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                                bastidores do turismo”, 26/8/1971.
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <blockquote>
                    “Eu não sabia ainda, mas na verdade já estava começando a mexer com o que seria
                    a principal vertente da minha vida profissional, buscando soluções na área de
                    comunicação para a promoção dos eventos da grife.”
                </blockquote>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas iure voluptas
                    unde natus quos fugiat inventore nesciunt. Maiores ratione cumque, atque alias
                    unde natus quos fugiat inventore nesciunt. Maiores ratione cumque, atque alias
                    unde natus quos fugiat inventore nesciunt. Maiores ratione cumque, atque alias
                    unde natus quos fugiat inventore nesciunt. Maiores ratione cumque, atque alias
                    unde natus quos fugiat inventore nesciunt. Maiores ratione cumque, atque alias
                    unde natus quos fugiat inventore nesciunt. Maiores ratione cumque, atque alias
                    quae perspiciatis optio quisquam repellendus, laborum eos consequuntur.
                </p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus vero
                    ratione tenetur. Veritatis omnis voluptate possimus? Sit architecto velit
                    placeat pariatur tenetur rerum similique qui eligendi, illum laborum. Maiores.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsum
                    recusandae animi consequuntur porro, similique labore tempora ullam quae
                    laborum?</p>
                    
                <h4>Promoshow</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste alias
                    facere dicta aperiam temporibus quia, molestias, fugiat eius reprehenderit,
                    dolorum expedita debitis saepe voluptas fugit est fuga ea eligendi?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                    perferendis, nulla enim optio illo nam dolorum itaque laudantium necessitatibus
                    eius?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita
                    minima ex dolorum illo alias maxime suscipit, consequuntur quam ut quas esse
                    voluptates, consectetur, nemo incidunt doloremque dicta accusantium ipsam?</p>
                <figure>
                    <div className="img-brush">
                        <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    </div>
                    <figcaption class="text-lg-right">
                        No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                        bastidores do turismo”, 26/8/1971.
                    </figcaption>
                </figure>

                <h4>Porto Seguro</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem
                    numquam voluptatum enim veniam fugit porro quibusdam magnam, necessitatibus
                    provident nulla optio quis dolores quisquam ad a sed illo? Magni.</p>
                <figure>
                    <div className="img-brush brush-line-bottom-right-tall">
                        <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    </div>
                    <figcaption class="text-lg-right">
                        No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                        bastidores do turismo”, 26/8/1971.
                    </figcaption>
                </figure>

                <p>Passaram bastante tempo juntos nessa viagem, e logo começaram um namoro que
                    dura até hoje. Com a entrada de Fernanda na sua vida, com a empresa crescendo e
                    também voltando a praticar o hipismo, Chiquinho deixou de lado de vez a vida
                    noturna e a boemia dos tempos de juventude para se dedicar com ainda mais ímpeto
                    ao trabalho, e logo começaria também um novo projeto de vida, mais ligado à sua
                    paixão pela natureza e pelos animais.</p>

                <h4>O sítio Santo Antônio</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestias
                    reprehenderit ex delectus sunt veniam dolore earum, atque aspernatur veritatis
                    natus mollitia esse ducimus deserunt sequi sint, laboriosam voluptates et.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid aut
                    minima dolore distinctio ab? Atque iste optio unde architecto! Quaerat veritatis
                    libero suscipit expedita atque repellendus nam iure eius.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, laborum!
                    Repellendus, porro. Perspiciatis debitis officia placeat distinctio corrupti
                    natus accusamus ut at? Accusantium, distinctio itaque.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta mollitia
                    delectus quidem modi voluptas, adipisci, inventore repellat, distinctio quisquam
                    eos totam temporibus dolore? Amet velit dolorem eaque molestiae libero repellat?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque eveniet,
                    quam rem distinctio fuga consequatur. Illo deleniti labore libero sequi
                    temporibus repellendus dolor veritatis saepe laborum ipsam eum soluta fuga ab
                    officia magnam, cupiditate voluptatem.
                </p>

                <figure>
                    <div className="img-brush brush-line-bottom-right-tall">
                        <img src={require('../../../assets/images/thumbs/historia-2.png')} alt=""/>
                    </div>
                    <figcaption>
                        No meu terceiro emprego, com o Fernando Hermanny na Lugitur. O GLOBO, “Nos
                        bastidores do turismo”, 26/8/1971.
                    </figcaption>
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