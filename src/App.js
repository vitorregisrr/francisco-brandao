import React, {Suspense} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {Helmet} from "react-helmet";

import './App.scss';
import 'assets/scss/util/__CSSTransitions.scss';

// Import HOCS
import Layout from 'hoc/Layout/Layout'

// Import Components
import Spinner from 'components/UI/Spinner/Spinner';

// Import Containers (Pages)
const Home = React.lazy(() => import ('containers/Home/Home'));
const Historia = React.lazy(() => import ('containers/Historia'));
const Empreendedorismo = React.lazy(() => import ('containers/Empreendedorismo'));
const Hipismo = React.lazy(() => import ('containers/Hipismo'));
const Colecao = React.lazy(() => import ('containers/Colecao'));
const MeioAmbiente = React.lazy(() => import ('containers/MeioAmbiente'));

const App = () => {
    const routes = [
        {
            path: '/',
            name: 'Home',
            Component: Home,
            exact: true

        }, {
            path: '/historia',
            name: 'História',
            Component: Historia,
            exact: true

        }, {
            path: '/empreendedorismo',
            name: 'Empreendedorismo',
            Component: Empreendedorismo,
            exact: true

        }, {
            path: '/hipismo',
            name: 'Hipismo',
            Component: Hipismo,
            exact: true

        }, {
            path: '/colecao',
            name: 'Coleção de Arte',
            Component: Colecao,
            exact: false
        }, {
            path: '/meio-ambiente',
            name: 'Meio Ambiente',
            Component: MeioAmbiente,
            exact: false
        }
    ];

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
                {routes.map(({path, Component, name, exact}) => (
                    <Route key={name} exact={exact} path={path}>
                        {({match}) => (
                            <CSSTransition
                                in={match != null}
                                timeout={{ enter: 400, exit: 400 }}
                                classNames="CSSTransition--fade"
                                unmountOnExit>
                                <div className="page">
                                    <Suspense fallback={< Spinner fullscreen />}>
                                        <React.Fragment>
                                            <Helmet>
                                                <title>Chico Brandão • {name}</title>
                                            </Helmet>
                                            <Component/>
                                        </React.Fragment>
                                    </Suspense>
                                </div>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
            </Layout>
        </BrowserRouter>
    );
}

export default App;
