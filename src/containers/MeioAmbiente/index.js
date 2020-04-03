import React from 'react';

import './styles.scss';
import PageBanner from 'components/Sections/PageBanner';

const MeioAmbiente = (props) => {
    return (
        <section className="MeioAmbiente">
            <PageBanner title={`Meio Ambiente`} background={false} />
        </section>
    )
}

export default MeioAmbiente;