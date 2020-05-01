import React, {useState} from 'react'

import Scroller from './Scroller'

import './styles.scss';

const HomeMenu = ({moveSlider, isFirst, setHasOverlay, slickRef}) => {
    const [underlineStyling,
        setUnderlineStyling] = useState({opacity: 0, width: 0, top: 100});
    const [currIndex,
        setCurrIndex] = useState(-1);
    const [isDesactived,
        setIsDesactived] = useState(false);
    const [isToggled,
        setIsToggled] = useState(false);
    const IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    const toggleMenu = () => {
        setIsToggled(!isToggled);
        setHasOverlay(!isToggled);
    }

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

    const moveMenu = (index) => {
        const item = document.querySelectorAll('.HomeMenu__item')[index + 1];
        if (!item) {
            return false;
        }
        const oldIndex = currIndex;
        toggleMenu(false);
        moveSlider(index + 1);
        setCurrIndex(index);

        // Desactived delay
        setIsDesactived(true);
        setTimeout(() => {
            setIsDesactived(false);
        }, 1600);

        // Animações do traço underline: Se for p/ o primeiro, esconder
        if (index === -1) {
            setUnderlineStyling({opacity: 0, top: 205})

            // Se estiver saindo do primeiro
        } else if (oldIndex === -1 && index > -1) {
            const offsets = [97, 63, 27, -3, -35];
            setUnderlineStyling({
                opacity: 1,
                width: item.offsetWidth - 7,
                top: item.offsetTop + 21 + (offsets[index])
            })
            // Se for p/ outros, seguir o item selecionado
        } else {
            setUnderlineStyling({
                opacity: 1,
                top: item.offsetTop + 21,
                width: item.offsetWidth - 7
            })
        }
    }

    return (
        <React.Fragment>
            <Scroller
                isLast={currIndex === 4}
                moveSlider={() => moveMenu(currIndex !== 4
                ? currIndex + 1
                : -1)}></Scroller>
            <div
                className={`HomeMenu__toggler ${isToggled
                ? 'toggled'
                : ''}`}>
                <button
                    className={`${isToggled
                    ? 'active'
                    : ''} ${IOS ? 'ios' : ''}`}
                    onClick={() => toggleMenu(!isToggled)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <nav
                className={`HomeMenu ${isFirst
                ? 'expanded'
                : ''} ${isDesactived
                    ? 'desactived'
                    : ''} ${isToggled
                        ? 'toggled'
                        : ''}`}>
                <div
                    className={`HomeMenu__content ${isToggled
                    ? 'toggled'
                    : ''} ${IOS
                        ? 'ios'
                        : ''}`}>

                    <hr className="HomeMenu__underline" style={underlineStyling}/>
                    <button className="HomeMenu__item home" onClick={(e) => moveMenu(-1)}>
                        Chico Brandão
                    </button>
                    {menuItems.map((i, index) => (
                        <button
                            className={`HomeMenu__item`}
                            key={i.key}
                            onClick={(e) => moveMenu(index)}>
                            {i.label}
                        </button>
                    ))}
                </div>
            </nav>
        </React.Fragment>
    )
}

export default HomeMenu;