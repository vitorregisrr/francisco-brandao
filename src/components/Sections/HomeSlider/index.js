import React, {useRef, useState} from 'react'

import HomeMenu from '../HomeMenu'
import MainSlider from './MainSlider'

import './styles.scss';

const HomeSlider = ({data}) => {
    const slickRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasOverlay, setHasOverlay] = useState(false);

    const moveSlider = i => {
        slickRef.current.slickGoTo(i);
        setCurrentIndex(i)
    }

    return (
        <section className="HomeSlider">
            <HomeMenu slickRef={slickRef} setHasOverlay={setHasOverlay} moveSlider={(i) => moveSlider(i)} isFirst={currentIndex !== 0}></HomeMenu>

            <main className="HomeSlider__content">
                <MainSlider data={data} isFirst={currentIndex !== 0} hasOverlay={hasOverlay} setCurrentIndex={setCurrentIndex} currIndex={currentIndex} slickRef={slickRef} />
            </main>
        </section>
    )
}

export default HomeSlider;