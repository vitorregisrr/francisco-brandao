import React, {useEffect, useState} from 'react'
import { LoadBar } from 'react-loadbar'

import './styles.scss'

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
        <aside class="Preloader" data-show={show}>
            <div className="Preloader__content">
                <div className="Preloader__brand">
                    <span>Francisco</span>
                    Brandão
                </div>

               <div className="Preloader__bar">
                    <LoadBar percent={20}/>
               </div>
            </div>
        </aside>
    )
}

export default Preloader;