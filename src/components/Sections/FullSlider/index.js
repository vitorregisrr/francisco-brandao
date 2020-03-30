import React, {useRef} from 'react'

import SliderMenu from '../HomeMenu'
import ScrollDown from './ScrollDown'
import MainSlider from './MainSlider'

import './styles.scss';

const FullSlider = (props) => {
    const slickRef = useRef(null);

    return (
        <section className="FullSlider">
            <SliderMenu isFirst={slickRef.getCurrent}></SliderMenu>

            <main class="FullSlider__content">
                <MainSlider slickRef={slickRef} />
                
                <ScrollDown onClick={() => slickRef.current.slickNext}></ScrollDown>
            </main>
        </section>
    )
}

export default FullSlider;