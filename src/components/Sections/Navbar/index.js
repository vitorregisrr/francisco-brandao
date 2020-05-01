import React, {useState, useEffect} from 'react'
import {NavLink, withRouter} from 'react-router-dom'

import './styles.scss';

const Navbar = ({location}) => {
    const [shouldTransition,
        setShouldTransition] = useState(false)
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

    const moveMenu = (index, toggle) => {
        const item = document.querySelector(`.Navbar__item[data-key="${index}"]`);
        setCurrIndex(index);

       if(item){
        if (!toggle) {
            toggleMenu();
        }

        setTimeout(() => {
            // Animações do traço underline: Se for p/ o primeiro, esconder
            setUnderlineStyling({
                opacity: 1,
                left: item.offsetLeft,
                top: item.offsetTop + 17,
                width: item.offsetWidth
            })
        }, 100)
       }
    }

    useEffect(() => {
        moveMenu(currIndex, true);

        setTimeout(() => setShouldTransition(true), 400)
    }, []);

    return (
        <React.Fragment>
            <div
                className={`Navbar__toggler ${isToggled
                ? 'toggled'
                : ''}`}>
                <button
                    className={`${isToggled
                    ? 'active'
                    : ''} ${IOS ? 'ios' : ''}`}
                    onClick={() => toggleMenu()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

                <NavLink className="Navbar__toggler-home" to="/">
                    Chiquinho <span>Brandão</span>
                </NavLink>
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

                        <div className="Navbar__brand">
                            <NavLink to="/">
                                Chico Brandão
                            </NavLink>
                        </div>
                        <div className="Navbar__links">
                            <hr
                                className="Navbar__underline"
                                style={underlineStyling}
                                data-shouldTransition={shouldTransition}/> {menuItems.map((i, index) => (
                                <NavLink
                                    data-key={i.key}
                                    className={`Navbar__item`}
                                    key={i.key}
                                    to={i.key}
                                    onClick={(e) => moveMenu(i.key)}>
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