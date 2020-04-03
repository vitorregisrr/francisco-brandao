import React from 'react';

import './styles.scss';
import PageBanner from 'components/Sections/PageBanner';

const Hipismo = (props) => {
    return (
        <section className="Colecao">
            <PageBanner title={`Coleção de Arte`} background={false} />
        </section>
    )
}

export default Hipismo;