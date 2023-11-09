import React from 'react';
import  '../components/Styles.css';
const CadaCreacion = ({ creacion }) => {
    return (
        <div className='container'>
            <div className="card">
                <h3 className='nombreCreac'>{creacion.title}</h3>
                <p>{creacion.description}</p>
                <p>Materia: {creacion.subject}</p>
                <p>Fecha: {creacion.date}</p>
                <a href={creacion.url}><button className='btn'>Link</button></a>
            </div>
        </div>
    );
};

export default CadaCreacion;
 