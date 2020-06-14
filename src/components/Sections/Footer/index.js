import React from 'react';

import './styles.scss';

const Footer = (props) => {
    return (
        <footer className="Footer wow fadeInUp">
           <h3 className="Footer__brand">Chico Brandão</h3>
           <p className="Footer__email">
           contato@chiquinhobrandao.com.br
           </p>
           <hr/>
           <p className="Footer__copy">
           © 2020 Chiquinho Brandão. Todos os direitos reservados.
           </p>
        </footer>
    )
}

export default Footer;