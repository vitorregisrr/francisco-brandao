import React, {useRef, useState} from 'react'

import HomeMenu from '../HomeMenu'
import Scroller from './Scroller'
import MainSlider from './MainSlider'

import './styles.scss';

const HomeSlider = (props) => {
    const slickRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="HomeSlider">
            <HomeMenu moveSlider={(i) => slickRef.current.slickGoTo(i)} isFirst={currentIndex !== 0}></HomeMenu>

            <main class="HomeSlider__content">
                <MainSlider setCurrentIndex={setCurrentIndex} slickRef={slickRef} />

                <Scroller onClick={() => slickRef.current.slickNext}></Scroller>
            </main>
        </section>
    )
}

export default HomeSlider;