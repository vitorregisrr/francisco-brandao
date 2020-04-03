import React, {useState, useEffect} from 'react'
import {NavLink, withRouter} from 'react-router-dom'

import './styles.scss';

const Navbar = ({location}) => {
    const [underlineStyling,
        setUnderlineStyling] = useState({opacity: 0, width: 0, top: 100});
    const [currIndex,
        setCurrIndex] = useState(location.pathname.split('/').pop());
    const [isToggled,
        setIsToggled] = useState(false);

    const IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    const toggleMenu = () => {
        setIsToggled(!isToggled);
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
        const item = document.querySelector(`.Navbar__item[data-key="${index}"]`);
        toggleMenu(false);
        setCurrIndex(index);

        // Animações do traço underline: Se for p/ o primeiro, esconder
        setUnderlineStyling({
            opacity: 1,
            left: item.offsetLeft - 4,
            top: item.offsetTop + 20,
            width: item.offsetWidth + 6
        })
    }

    useEffect(() => {
      moveMenu(currIndex);
    }, []);

    return (
        <React.Fragment>
            <div
                className={`Navbar__toggler ${isToggled
                ? 'toggled'
                : ''}`}>
                <button
                    className={isToggled
                    ? 'active'
                    : ''}
                    onClick={() => toggleMenu(!isToggled)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <nav
                className={`Navbar ${isToggled
                    ? 'toggled'
                    : ''}`}>
                <div className="container">
                    <div
                        className={`Navbar__content ${isToggled
                        ? 'toggled'
                        : ''} ${IOS
                            ? 'ios'
                            : ''}`}>

                        <div>
                            <NavLink to="/" className="Navbar__brand">
                                Chico Brandão
                            </NavLink>
                        </div>
                        <div>
                            <hr className="Navbar__underline" style={underlineStyling}/> 
                            {menuItems.map((i, index) => (
                                <NavLink data-key={i.key} className={`Navbar__item`} key={i.key} to={i.key} onClick={(e) => moveMenu(i.key)}>
                                    {i.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default withRouter(Navbar);