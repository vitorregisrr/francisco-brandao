import React, {useState} from 'react';
import ReactWOW from 'react-wow';
import {Link, withRouter} from 'react-router-dom';

import './styles.scss';
import NavbarItem from './NavbarItem';

const Navbar = (props) => {
    const [isSticky,
        setSticky] = useState(false);
    const [isNavToggled,
        toggleNav] = useState(false);

    const watchSticky = () => {
        function handleScroll() {
            if (window.scrollY > 60) {
                if (isSticky === false) {
                    setSticky(true);
                }

            } else {
                if (isSticky === true) {
                    setSticky(false);
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
    };
    watchSticky();

    const navItems = [
        {
            key: 'historia',
            label: 'História',
            routeTo: '/historia',
        },
        {
            key: 'empreendedorismo',
            label: 'Empreendedorismo',
            routeTo: '/empreendedorismo',
        },
        {
            key: 'hipismo',
            label: 'Hipismo',
            routeTo: '/hipismo',
        },
        {
            key: 'colecao',
            label: 'Coleção de Arte',
            routeTo: '/colecao',
        },
        {
            key: 'meio-ambiente',
            label: 'Meio Ambiente',
            routeTo: '/meio-ambiente',
        },

    ]
    return (
        <nav className={`Navbar ${isSticky
            ? 'sticky'
            : ''}`}>
            <ReactWOW animation='fadeInDown'>
                <div className="Navbar__content container">
                    <Link to="/">
                        <img src='' className="Navbar__brand" alt="Logo SACI 2019"/>
                    </Link>

                    <button
                        className="btn-transparent Navbar__toggler"
                        aria-expanded={isNavToggled}
                        onClick={() => toggleNav(!isNavToggled)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul
                        className={`Navbar__links ${isNavToggled
                        ? 'active'
                        : ''}`}
                        aria-hidden={!isNavToggled}
                        onMouseDown={() => setTimeout(() => toggleNav(false),100)}>
                            { navItems.map( item => 
                                <NavbarItem 
                                    path={props.location.pathname}
                                    {...item}/>
                            )}
                    </ul>
                </div>
            </ReactWOW>
        </nav>
    )
}

export default withRouter(Navbar);