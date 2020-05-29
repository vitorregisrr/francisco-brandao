import React, {useState} from 'react'

import './styles.scss'

const GaleriaFiltros = ({data, setParentFiltros}) => {
    const [filtros,
        setFiltros] = useState({nomeArtista: '', nomeObra: '', tipoObra: '', dataDe: '', dataAte: ''});    
    let listArtistas = [];
    let listNomes = [];
    let listTipos = [];

    if(data){
        listArtistas = data.map( i => i.file_artista).filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        }).filter(function(str) {
            return /\S/.test(str) && str !== null;
        }).sort(function(a, b){
            if(a < b) { return -1; }
            if(a > b) { return 1; }
            return 0;
        });

        listNomes = data.map( i => i.file_desc2).filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        }).filter(function(str) {
            return /\S/.test(str) && str !== null;
        });

        listTipos = data.map( i => i.file_tipo).filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        }).filter(function(str) {
            return /\S/.test(str) && str !== null;
        });
    }

    const updateFiltros = (key, value) =>{
        let newFiltros = {...filtros};
        newFiltros[key] = value;
        setFiltros(newFiltros);
    }

    const sendFiltros = () => {
        console.log(filtros)
        setParentFiltros(filtros);
    }

    return (
        <header className="GaleriaFiltros my-5">
            <div className="container">
                <h1 className="GaleriaFiltros__title">
                    Filtros
                </h1>

                <div className="row">
                    <div className="col-lg-3 mb-3 mb-lg-0 col-12 pr-lg-0">
                        <div className="form-control">
                            <label htmlFor="nome-artista">Nome do Artista</label>
                            <select name="nome-artista" id="nome-artista" onChange={(e) => updateFiltros('nomeArtista', e.target.value) }>
                                <option selected disabled>Selecione</option>
                                <option value="">Todos</option>
                                {listArtistas.map( i => (
                                    <option value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 mb-3 mb-lg-0 col-6 pr-lg-0">
                        <div className="form-control">
                            <label htmlFor="nome-obra">Nome da Obra</label>
                            <select name="nome-obra" id="nome-obra" onChange={(e) => updateFiltros('nomeObra', e.target.value) }>
                                <option selected disabled>Selecione</option>
                                <option value="">Todos</option>
                                {listNomes.map( i => (
                                    <option value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-2 mb-3 mb-lg-0 col-6 pr-lg-0">
                        <div className="form-control">
                            <label htmlFor="tipo-obra">Tipo da Obra</label>
                            <select name="tipo-obra" id="tipo-obra" onChange={(e) => updateFiltros('tipoObra', e.target.value) }>
                            <option selected disabled>Selecione</option>
                            <option value="">Todos</option>
                                {listTipos.map( i => (
                                    <option value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-2 mb-3 mb-lg-0 col-6">
                        <div className="form-control">
                            <label htmlFor="data-obra" className="pl-0 pl-lg-3">
                                Data da obra
                            </label>
                            <div className="d-flex align-items-center">
                                <small>De:</small>
                                <input type="date" onChange={(e) => updateFiltros('dataDe', e.target.value) }/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 mb-3 mb-lg-0 col-6 pl-lg-0">
                        <div className="form-control">
                            <label
                                htmlFor=""
                                style={{
                                opacity: 0
                            }}>.</label>
                            <div className="d-flex align-items-center">
                                <small>Até:</small>
                                <input type="date" onChange={(e) => updateFiltros('dataAte', e.target.value) }/>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-3 mb-3 mb-lg-0 col-12">
                        <div className="form-control">
                            <label
                                htmlFor=""
                                style={{
                                opacity: 0
                            }}>.</label>
                            <button className="btn-outline-white w-100" onClick={sendFiltros}>Filtrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default GaleriaFiltros