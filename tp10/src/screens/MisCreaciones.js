import {Link, Outlet} from 'react-router-dom';
import axios from 'axios';
import CadaCreacion from '../components/CadaCreacion';

const MisCreaciones = (creaciones, listaCreaciones) => {

console.log('en mis creaciones');
    return (
        <>
        <div>
            <h2 className='tituloProd'>Mis creaciones</h2>
            <CadaCreacion className = 'titulo' creaciones={creaciones} listaCreaciones={listaCreaciones}></CadaCreacion>
        
        </div>
        </>
    );
}

export default MisCreaciones;

