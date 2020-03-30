import React, {Suspense} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

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

        },
        {
            path: '/historia',
            name: 'História',
            Component: Historia,
            exact: true

        },
        {
            path: '/empreendedorismo',
            name: 'empreendedorismo',
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
            {routes.map(({path, Component, name, exact}) => (
                <Route key={name} exact={exact} path={path}>
                    {({match}) => (
                        <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="CSSTransition--fade"
                            unmountOnExit>
                            <div className="page">
                                <Suspense fallback={< Spinner fullscreen/>}>
                                    {path !== '/' ? <Component/> : <Layout><Component /></Layout>}
                                </Suspense>
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </BrowserRouter>
    );
}

export default App;
