import React, {useState} from 'react';

import './styles.scss';

const Scroller = ({isLast, moveSlider}) => {
    const [isDesactived, setIsDesactived] = useState(false);

    const useScroll = () => {
        moveSlider();
        // Desactived delay
        setIsDesactived(true);
        setTimeout(() => {
            setIsDesactived(false);
        }, 1600);
    }

    return (
        <button title="Próximo item" onClick={useScroll} className={`Scroller ${!isLast ? 'isLast' : ''} ${isDesactived ? 'desactived' : ''}`}>
            <span>Segue</span>
            <span>Topo</span>
            <div className="arrow"></div>
        </button>
    )
}

export default Scroller;