import React from 'react'
import {withRouter} from 'react-router-dom'

import Navbar from '../../components/Sections/Navbar';
import Footer from '../../components/Sections/Footer';
import ScrollTop from 'components/UI/ScrollTop/ScrollTop';

const Layout = props => {
    return (
        <React.Fragment>
            {props.location.pathname !== '/' && <Navbar/>}
            <main>
                {props.children}
            </main>
            {props.location.pathname !== '/' &&  <Footer/>}
            {props.location.pathname !== '/' &&  <ScrollTop/>}
        </React.Fragment>
    )

}

export default withRouter(Layout);