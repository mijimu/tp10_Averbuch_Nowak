import React from 'react';

const CadaCreacion = ({ listaCreaciones }) => {
    return (
        <div className='container'>
            <div className="containerCadaUna">
                {Array.isArray(listaCreaciones) && listaCreaciones.length > 0 ? (
                    listaCreaciones.map(c => (
                        <div className='cadaUna' key={c.id}>
                            <h3 className='nombreCreac'>{c.title}</h3>
                            <img className='imgs' src={c.images[c.id]} alt={c.title} />
                            <button src={c.url}></button>
                        </div>
                    ))
                ) : (
                    <p>Loading... </p>
                )}
            </div>
        </div>
    );
};

export default CadaCreacion;
