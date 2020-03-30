import React from 'react';

import './styles.scss';

const HomeMenu = (moveSlider, isFirst) => {
    const menuItems = [
        {
            key: 'historia',
            label: 'História'
        },
        {
            key: 'empreendedorismo',
            label: 'Empreendedorismo'
        },
        {
            key: 'hipismo',
            label: 'Hipismo'
        },
        {
            key: 'Coleção de arte',
            label: 'colecao'
        },
        {
            key: 'Meio Ambiente',
            label: 'meio-ambiente'
        }
    ]
    return (
        <nav class={`HomeMenu ${isFirst && 'expanded'}`}>
            <button class="HomeMenu__item" onClick={moveSlider(0)}>
                Chico Brandão
            </button>

            {menuItems.map((i, index) => (
                <button class="HomeMenu__item" key={i.key} onClick={moveSlider(index + 1)}>
                    {i.label}
                </button>
            ))};

        </nav>
    )
}

export default HomeMenu;