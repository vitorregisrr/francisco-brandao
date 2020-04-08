import React from 'react'
import {Helmet} from "react-helmet"
import {BrowserRouter} from 'react-router-dom'

import AppRouter from './AppRouter'
import Layout from 'hoc/Layout/Layout'

import './App.scss'
import 'assets/scss/util/__CSSTransitions.scss'

const App = () => {

    return (
        <BrowserRouter basename="/">
            <Helmet>
                <title>Chico Brandão</title>
                <meta
                    name="description"
                    content="Conheça a trajetória de Francisco Soares Brandão, sócio-fundador da FSB, maior empresa de comunicação corporativa da América Latina."/>

                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="keywords" content=""/>
                <meta NAME="Googlebot" CONTENT="index,follow"/>
                <meta NAME="robots" CONTENT="index,follow"/>
                <meta NAME="Identifier-URL" CONTENT="http://www."/>
                <meta NAME="url" CONTENT="http://www."/>
                <meta NAME="Language" CONTENT="PT-BR"/>
                <meta NAME="content-language" CONTENT="pt-br"/>
                <meta NAME="distribution" CONTENT="Global"/>
                <meta NAME="coverage" CONTENT="Worldwide"/>
                <meta NAME="Author" CONTENT="Sorocabacom.com"/>
                <meta NAME="Generator" CONTENT=""/>
                <meta name="description" content=""/>

                <meta property="og:title" content="Title"/>
                <meta property="og:description" content=""/>
                <meta property="og:image" content="http://www."/>
                <meta property="og:url" content="http://www."/>
                <meta property="og:type" content="website"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="og:site_name" content="dom.com.br"/>
                <meta name="twitter:image:alt" content="Title"/>
                <meta property="fb:app_id" content="_app_id"/>
                <meta name="twitter:site" content="@app"/>
            </Helmet>

            <Layout>
                <AppRouter/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;