import React from 'react';

import './styles.scss';
import PageBanner from 'components/Sections/PageBanner';

const Colecao = (props) => {
    return (
        <section className="Colecao">
            <PageBanner title={`Hipismo`} background={false} />
        </section>
    )
}

export default Colecao;