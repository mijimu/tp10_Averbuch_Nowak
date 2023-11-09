import CadaCreacion from '../../components/CadaCreacion';
import "../MisCreaciones/MisCreaciones.css";
import favYes from './../../assets/fav.png';
import favNo from './../../assets/emptyFav.png';
import axios from 'axios'; 
import Footer from "../../components/Footer.js";

import React, {useEffect, useState} from 'react';

const MisCreaciones = () => {

    const [ creaciones, setCreaciones ] = useState([]);

    useEffect(() => {
        axios.get('/Creaciones.json') 
          .then(response => {
            setCreaciones(response.data);
          })
          .catch(error => {
            console.error('Error', error);
          });
      }, []);


    console.log('en mis creaciones');
    return (
        <>
            <div className="container">
                <h2 className='tituloProd'>Mis creaciones</h2>
                {creaciones.map (c => (
                    <CadaCreacion className='titulo'  key={c.id} creacion={c} ></CadaCreacion>

                ))}
                
                <img src={favNo} alt='favNo' className='favs'></img>
                <img src={favYes} alt='favNo' className='favs'></img>
                <div className='foot'>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}
export default MisCreaciones;
