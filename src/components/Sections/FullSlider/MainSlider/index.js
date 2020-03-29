import React, {useState} from 'react'

const MainSlider = ({slickRef}) => {;

    const slickSettings = {}

    return (
        <Slick ref={slickRef} {...slickSettings}>
            {/* Slider História */}
            <section class="FullSlider__item">
                <SubSlider></SubSlider>
            </section>

            {/* História */}
            <section class="FullSlider__item">
                <div className="FullSlider__item-caption">
                    <h1 className="FullSlider__item-title">
                        .História
                    </h1>
                    <hr className="FullSlider__item-divisor"/>
                    <h2 className="FullSlider__item-subtitle">
                        Conheça a história de Chiquinho Brandão
                    </h2>
                    <Link className="FullSlider__item-arrow" to="/historia"/>
                </div>
            </section>

            {/* Empreendedorismo */}
            <section class="FullSlider__item">
                <div className="FullSlider__item-caption">
                    <h1 className="FullSlider__item-title">
                        .Empreendedorismo
                    </h1>
                    <hr className="FullSlider__item-divisor"/>
                    <h2 className="FullSlider__item-subtitle">
                        Desde início até a FSB
                    </h2>
                    <Link className="FullSlider__item-arrow" to="/empreendedorismo"/>
                </div>
            </section>

            {/* Hipismo */}
            <section class="FullSlider__item">
                <div className="FullSlider__item-caption">
                    <h1 className="FullSlider__item-title">
                        .Hipismo
                    </h1>
                    <hr className="FullSlider__item-divisor"/>
                    <h2 className="FullSlider__item-subtitle">
                        A relação com os cavalos dede a infância
                    </h2>
                    <Link className="FullSlider__item-arrow" to="/hipismo"/>
                </div>
            </section>

            {/* Coleção de arte */}
            <section class="FullSlider__item">
                <div className="FullSlider__item-caption">
                    <h1 className="FullSlider__item-title">
                        .Coleção de arte
                    </h1>
                    <hr className="FullSlider__item-divisor"/>
                    <h2 className="FullSlider__item-subtitle">
                        Veja mais de 300 obras no acervo
                    </h2>
                    <Link className="FullSlider__item-arrow" to="/colecao"/>
                </div>
            </section>

            {/* Meio Ambiente */}
            <section class="FullSlider__item">
            <div className="FullSlider__item-caption">
                    <h1 className="FullSlider__item-title">
                        .Meio Ambiente
                    </h1>
                    <hr className="FullSlider__item-divisor"/>
                    <h2 className="FullSlider__item-subtitle">
                        O Sítio Santo Antônio e a Natureza
                    </h2>
                    <Link className="FullSlider__item-arrow" to="/meio-ambiente"/>
                </div>
            </section>
        </Slick>
    )
}