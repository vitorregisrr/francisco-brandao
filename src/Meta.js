import React from 'react'
import {Helmet} from "react-helmet"

const Meta = () => {

    // const [isFetching,
    //     setIsFetching] = useState(true);
    // const [data,
    //     setData] = useState(false);

    // useEffect(() => {
    //     if (getStorage('main-meta')) {
    //         setIsFetching(false);
    //         console.log(JSON.parse(getStorage('main-meta')))
    //         return setData(JSON.parse(getStorage('main-meta')))
    //     }

    //     axios
    //         .get('/pages/head')
    //         .then(response => {
    //             setData(response.data);
    //             setStorage('main-meta', JSON.stringify(response.data));
    //         })
    //         .catch(err => console.log(err))
    //         . finally(() => {
    //             setIsFetching(false);
    //         })
    // }, []);

    return(
        <Helmet>
            <title>Chiquinho Brandão</title>
            <meta
                name="description"
                content="Conheça a trajetória de Francisco Soares Brandão, sócio-fundador da FSB, maior empresa de comunicação corporativa da América Latina."/>

            <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="keywords" content=""/>
            <meta NAME="Googlebot" CONTENT="index,follow"/>
            <meta NAME="robots" CONTENT="index,follow"/>
            <meta NAME="Identifier-URL" CONTENT="http://www.chiquinhobrandao.com.br"/>
            <meta NAME="url" CONTENT="http://www.chiquinhobrandao.com.br"/>
            <meta NAME="Language" CONTENT="PT-BR"/>
            <meta NAME="content-language" CONTENT="pt-br"/>
            <meta NAME="distribution" CONTENT="Global"/>
            <meta NAME="coverage" CONTENT="Worldwide"/>
            <meta NAME="Author" CONTENT="Sorocabacom.com"/>
            <meta NAME="Generator" CONTENT=""/>
            
            <meta property="og:title" content="Chiquinho Brandão"/>
            <meta property="og:description" content=""/>
            <meta property="og:image" content="http://www.chiquinhobrandao.com.br"/>
            <meta property="og:url" content="http://www.chiquinhobrandao.com.br"/>
            <meta property="og:type" content="website"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="og:site_name" content="dom.com.br"/>
            <meta name="twitter:image:alt" content="Title"/>
            <meta property="fb:app_id" content="_app_id"/>
            <meta name="twitter:site" content="@app"/>
    </Helmet>
    )
}

export default Meta;