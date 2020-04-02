import React, {useState, useEffect} from 'react'
import axios from 'axios.instance'

import {HomeSlider} from '../../components/Sections'
import Preloader from 'components/UI/Preloader';

const Home = (props) => {
    const [isFetching, setIsFetching] = useState(true);
    const [homeData, setHomeData] = useState();

    const config = {
        onUploadProgress: progressEvent => console.log(progressEvent)
    }

    const data = {
        
    }

    axios.get('',data , config)
    .then(response => {
        setHomeData(response.data)
        alert(response.data)
    })
    .catch( (error) => {
        console.log(error)
    }).finally(() => {
        setIsFetching(false);
    },)

    // useEffect( () => setTimeout( () => setIsFetching(false),2000),[]);
    return (
        <React.Fragment>
            <Preloader show={isFetching}/>
            <HomeSlider></HomeSlider>
        </React.Fragment>
    )
}

export default Home;