import React, {useState} from 'react';

import './styles.scss';

const HomeMenu = ({moveSlider, isFirst}) => {
    const [underlineStyling, setUnderlineStyling] = useState({
        opacity: 0,
        width: 0,
        top: 100,
    });

    const [currIndex, setCurrIndex] = useState(-1);
    const [isDesactived, setIsDesactived] = useState(false);

    const menuItems = [
        {
            key: 'historia',
            label: 'História'
        }, {
            key: 'empreendedorismo',
            label: 'Empreendedorismo'
        }, {
            key: 'hipismo',
            label: 'Hipismo'
        }, {
            label: 'Coleção de arte',
            key: 'colecao'
        }, {
            label: 'Meio Ambiente',
            key: 'meio-ambiente'
        }
    ];

    const moveMenu = (index, e) => {
        const item = e.target;
        const oldIndex = currIndex;
        setIsDesactived(true);
        moveSlider(index + 1);

        // Desactived delay
        setCurrIndex(index);
        setTimeout(() => {
            setIsDesactived(false);
        }, 1600);

        // Animações do traço underline:
        // Se for p/ o primeiro, esconder
        if( index === -1){
            setUnderlineStyling({
                opacity: 0,
                top: 205,
            })
        }
        // Se estiver saindo do primeiro
        else if( oldIndex === -1 && index > -1){
            const offsets = [102, 60, 22, -20, -53];
            setUnderlineStyling({
                opacity: 1,
                width: item.offsetWidth,
                top: item.offsetTop + 19 + (offsets[index])
            })
        }
        
        // Se for p/ outros, seguir o item selecionado
        else{
            setUnderlineStyling({
                opacity: 1,
                top: item.offsetTop + 19,
                width: item.offsetWidth
            })
        }
    }

    return (
        <nav class={`HomeMenu ${isFirst ? 'expanded' : ''}  ${isDesactived ? 'desactived' : ''}`}>
            <div className="HomeMenu__content">
                <hr class="HomeMenu__underline" style={underlineStyling}/>
                <button class="HomeMenu__item home"   onClick={(e) => moveMenu(-1, e)}>
                    Chico Brandão
                </button>
                {menuItems.map((i, index) => (
                    <button
                        class={`HomeMenu__item`}
                        key={i.key}
                        onClick={(e) => moveMenu(index, e)}>
                        {i.label}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default HomeMenu;