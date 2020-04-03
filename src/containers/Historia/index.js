import React from 'react';

import './styles.scss';
import PageBanner from 'components/Sections/PageBanner';

const Historia = (props) => {
    return (
        <section className="Historia">
            <PageBanner title={`História`} background={false} />
        </section>
    )
}

export default Historia;