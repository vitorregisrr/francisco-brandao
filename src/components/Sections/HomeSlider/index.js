import React, {useRef} from 'react'

import HomeMenu from '../HomeMenu'
import Scroller from './Scroller'
import MainSlider from './MainSlider'

import './styles.scss';

const HomeSlider = (props) => {
    const slickRef = useRef(null);
    const currentIndex = useRef(0);

    return (
        <section className="HomeSlider">
            <HomeMenu moveSlider={(i) => slickRef.current.slickGoTo(i)} isFirst={currentIndex == 0}></HomeMenu>

            <main class="HomeSlider__content">
                <MainSlider slickRef={slickRef} />

                <Scroller onClick={() => slickRef.current.slickNext}></Scroller>
            </main>
        </section>
    )
}

export default HomeSlider;