import React from 'react';

import ReactWOW from 'react-wow';

import Navbar from '../../components/Sections/Navbar';
import Footer from '../../components/Sections/Footer';
import ScrollTop from 'components/UI/ScrollTop/ScrollTop';

const Layout = props => {
    return (
        <ReactWOW>
            <Navbar />
            <main>
                    {props.children}
            </main>
             <Footer />
             <ScrollTop></ScrollTop>
        </ReactWOW>
    )

}

export default Layout;