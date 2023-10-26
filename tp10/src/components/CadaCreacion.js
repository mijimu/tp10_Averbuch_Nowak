import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CadaCreacion = ({ creaciones, listaCreaciones }) => {

    return (
        <div className='container'>
            
            <div className="containerCadaUna">
                { creaciones ? (
                    
                        creaciones.map(c => (
                            <div className = 'cadaUna' key={c.id}>
                                <h3 className='nombreCreac'>{c.title}</h3>

                                <img className='imgs' src={c.images[0]} alt={c.title} />

                            </div>
                        ))
                    )
                    : 
                    (
                    <p>Loading... </p>
                )}
            </div>
        </div>
    );
};

export default CadaCreacion;