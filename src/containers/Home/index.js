import React, {useState, useEffect, useMemo} from 'react'
import axios from 'axios.instance'
import {getStorage, setStorage} from 'util/storage';

import {HomeSlider} from '../../components/Sections'
import Preloader from 'components/UI/Preloader'

const Home = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [homeData, setHomeData] = useState(false);
    const [loadingPercentage, setLoadingPercentage] = useState();

    const config = useMemo(() => ({
        onDownloadProgress: progressEvent => {
            const usualUploadSize = 6136058;
            const total = progressEvent.srcElement.getResponseHeader('Real-Content-Length') || usualUploadSize;
            let percentCompleted = Math.round((progressEvent.loaded * 100) / total);
            percentCompleted = percentCompleted === 100 ? 99 : percentCompleted;
            setLoadingPercentage(percentCompleted);
        }
    }), []);

    useEffect( () =>{
      if(getStorage('home-data')){
          setIsFetching(false);
          console.log(JSON.parse(getStorage('home-data')))
          return setHomeData(JSON.parse(getStorage('home-data')))
      }

      axios.get('/pages/home', config)
      .then(response => {
          setHomeData(response.data);
          setStorage('home-data', JSON.stringify(response.data));
      })
      .catch(err => console.log(err))
      .finally(() => {
          setIsFetching(false);
      })
    } ,[config]);

    return (
        <React.Fragment>
            <Preloader loadProgress={loadingPercentage} show={isFetching}/>
            {homeData ? <HomeSlider data={homeData}></HomeSlider> : null}
        </React.Fragment>
    )
}

export default Home;