import React, {useEffect, useState} from 'react'
import LoadBar from '../LoadBar';

import './styles.scss'
import brandGIF from '../../../assets/images/ico/loader.gif';

const Preloader = ({show, loadProgress}) => {
    const [currName, setCurrName] = useState(0);

    useEffect( () => {
        setInterval(() => {
            nextName();
          }, 1300);
    }, []);

    const nextName = () => {
        setCurrName(prevState => prevState === 2 ? 0 : prevState + 1);
    }

    return(
        <aside className="Preloader" data-show={show}>
            <div className="Preloader__content">
                <div className="Preloader__brand">
                    <img src={brandGIF} alt="Logo animado" width={200}/>
                </div>

               <div className="Preloader__bar">
                    <LoadBar percent={loadProgress}/>
               </div>
            </div>
        </aside>
    )
}

export default Preloader;