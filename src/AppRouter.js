import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import PageTransition from 'react-router-page-transition'
import {Helmet} from "react-helmet"

// Import Containers (Pages)
import Home from 'containers/Home'
import Historia from 'containers/Historia'
import Empreendedorismo from 'containers/Empreendedorismo'
import Hipismo from 'containers/Hipismo'
import Colecao from 'containers/Colecao'
import MeioAmbiente from 'containers/MeioAmbiente'

const AppRouter = ({location}) => {
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
            exact: true
        }, {
            path: '/meio-ambiente',
            name: 'Meio Ambiente',
            Component: MeioAmbiente,
            exact: true
        }
    ];
    
    return (
        <PageTransition timeout={800}>
            <Switch location={location}>
                {routes.map(({path, Component, name, exact}) => (
                    <Route key={name} exact path={path}>
                        <div className="page transition-item">
                            <Helmet>
                                <title>Chico Brandão • {name}</title>
                            </Helmet>
                            <Component/>
                        </div>
                    </Route>
                ))}
            </Switch>
        </PageTransition>
    )
}

export default withRouter(AppRouter);
