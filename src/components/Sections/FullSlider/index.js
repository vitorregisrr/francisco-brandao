import React, {useRef} from 'react'
import MainSlider from 'react-slick'
import {Link} from 'react-router-dom'

import SliderMenu from './SliderMenu'
import ScrollDown from './ScrollDown'
import SubSlider from './SubSlider'

import './styles.scss';

const FullSlider = (props) => {
    const slickRef = useRef(null);

    return (
        <section className="FullSlider">
            <SliderMenu isFirst={slickRef.getCurrent}></SliderMenu>

            <main class="FullSlider__content">
                <MainSlider slickRef={slickRef} />
                
                <ScrollDown onClick={slickRef.current.slickNext}></ScrollDown>
            </main>
        </section>
    )
}

export default FullSlider;