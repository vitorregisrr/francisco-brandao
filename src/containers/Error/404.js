import React from 'react'
import {Link} from 'react-router-dom'

const Error404 = (props) => {
    return (
        <div className="pt-5 container">
            <div className="pt-5 mt-5  d-flex justify-content-center flex-column">
                <div class="pt-lg-5">
                    <h1
                        class="color-primary text-uppercase text-center"
                        style={{
                        fontWeight: 400
                    }}>Página não encontrada!</h1>
                    <hr style={{width: '250px', borderColor: '#831313c0', backgroundColor: '#831313c0', margin: '0 auto'}} />
                    <h4 className="color-primary">
                        <Link
                            to="/"
                            style={{
                            textAlign: 'center',
                            width: '100%',
                            display: 'block',
                            fontWeight: 400,
                            color: '#831313c0 !important'
                        }}>Ir para ínicio</Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Error404;