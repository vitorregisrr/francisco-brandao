import React, {useState, useEffect} from 'react'
import axios from 'axios.instance'

import {HomeSlider} from '../../components/Sections'
import Preloader from 'components/UI/Preloader';

const Home = (props) => {
    const [isFetching, setIsFetching] = useState(true);
    const [homeData, setHomeData] = useState();
    const [loadingPercentage, setLoadingPercentage] = useState();

    const config = {
        onDownloadProgress: progressEvent => {
            const total = progressEvent.srcElement.getResponseHeader('Real-Content-Length')
            let percentCompleted = Math.round((progressEvent.loaded * 100) / total)
            percentCompleted = percentCompleted === 100 ? 99 : percentCompleted;
            setLoadingPercentage(percentCompleted)
        }
    }

    useEffect( () =>{
        axios.get('', config)
        .then(response => {
            setHomeData(response.data)
            console.log(response.data)
        })
        .catch(err => console.log(err))
        .finally(() => {
            setIsFetching(false);
        })
    } ,[])

    return (
        <React.Fragment>
            <Preloader loadProgress={loadingPercentage} show={isFetching}/>
            <HomeSlider data={homeData}></HomeSlider>
        </React.Fragment>
    )
}

export default Home;