import React, {useState} from 'react';
import {animateScroll as scroll} from "react-scroll";

import './ScrollTop.scss';

const ScrollTop = props => {
    const [isVisible,
        setIsVisible] = useState(false);

    const watchSticky = () => {
        function handleScroll() {
            if (window.scrollY > 200) {
                if (isVisible === false) {
                    setIsVisible(true);
                }

            } else {
                if (isVisible === true) {
                    setIsVisible(false);
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
    };
    watchSticky();

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <React.Fragment>
            <button onClick={scrollToTop} className="ScrollTop" data-visible={isVisible}>
                <span className="ico"></span>
            </button>
        </React.Fragment>
    )
}

export default ScrollTop;