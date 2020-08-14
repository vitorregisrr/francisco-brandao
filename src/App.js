import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import AppRouter from './AppRouter'
import Layout from 'hoc/Layout/Layout'

import './App.scss'
import 'assets/scss/util/__CSSTransitions.scss'
import Meta from 'Meta'

const App = () => {

    return (
        <BrowserRouter basename="/">
            <Meta />
            <Layout>
                <AppRouter/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;