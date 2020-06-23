import React from 'react';

import './styles.scss';

const Footer = (props) => {
    return (
        <footer className="Footer wow fadeInUp">
           <h3 className="Footer__brand">Chiquinho Brandão</h3>
           <a target="_blank" rel="noopener noreferrer" href="mailto:contato@chiquinhobrandao.com.br" className="Footer__email">
           Contato
           </a>
           <hr/>
           <p className="Footer__copy">
           © 2020 Chiquinho Brandão. Todos os direitos reservados.
           </p>
        </footer>
    )
}

export default Footer;