import React from 'react'

import './styles.scss'

const GaleriaFiltros = () => {
    return (
        <header className="GaleriaFiltros my-5">
            <div className="container">
                <h1 className="GaleriaFiltros__title">
                    Filtros
                </h1>

                <div className="row">
                    <div className="col-2 pr-lg-0">
                        <div className="form-control">
                            <label htmlFor="nome-artista">Nome do Artista</label>
                            <select name="nome-artista" id="nome-artista">
                                <option value="" selected disabled>Selecione</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-2 pr-lg-0">
                        <div className="form-control">
                            <label htmlFor="nome-obra">Nome da Obra</label>
                            <select name="nome-obra" id="nome-obra">
                                <option value="" selected disabled>Selecione</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-2 pr-lg-0">
                        <div className="form-control">
                            <label htmlFor="tipo-obra">Tipo da Obra</label>
                            <select name="tipo-obra" id="tipo-obra">
                                <option value="" selected disabled>Selecione</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-control">
                            <label htmlFor="data-obra" className="pl-3">
                                Data da obra
                            </label>
                            <div className="d-flex align-items-center">
                                <small>De:</small>
                                <input type="date"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 pl-lg-0">
                        <div className="form-control">
                            <label
                                htmlFor=""
                                style={{
                                opacity: 0
                            }}>.</label>
                            <div className="d-flex align-items-center">
                                <small>Até:</small>
                                <input type="date"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-control">
                            <label
                                htmlFor=""
                                style={{
                                opacity: 0
                            }}>.</label>
                            <button className="btn-outline-white w-100">Filtrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default GaleriaFiltros