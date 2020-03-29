import React from 'react';
import {Link} from 'react-router-dom';

const NavbarItem = (props) => {

    return (
        <li>
            <Link
                to={props.routeTo}
                className="Navbar__links__item">
                {props.label}
            </Link>
        </li>
    )
}

export default NavbarItem;