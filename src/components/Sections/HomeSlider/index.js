import React, {useRef} from 'react'

import HomeMenu from '../HomeMenu'
import Scroller from './Scroller'
import MainSlider from './MainSlider'

import './styles.scss';

const HomeSlider = (props) => {
    const slickRef = useRef(null);

    return (
        <section className="HomeSlider">
            <HomeMenu isFirst={slickRef.getCurrent}></HomeMenu>

            <main class="HomeSlider__content">
                <MainSlider slickRef={slickRef} />

                <Scroller onClick={() => slickRef.current.slickNext}></Scroller>
            </main>
        </section>
    )
}

export default HomeSlider;