import React from 'react';

import './styles.scss';
import PageBanner from 'components/Sections/PageBanner';

const Empreendedorismo = (props) => {
    return (
        <section className="Empreendedorismo">
            <PageBanner title={`Empreendedorismo`} background={false} />
        </section>
    )
}

export default Empreendedorismo;