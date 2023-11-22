import CadaCreacion from '../../components/CadaCreacion';
import "../MisCreaciones/MisCreaciones.css";
import favYes from './../../assets/fav.png';
import favNo from './../../assets/emptyFav.png';
import axios from 'axios';
import Footer from "../../components/Footer.js";

import React, { useEffect, useState } from 'react';

const MisCreaciones = () => {

    const [creaciones, setCreaciones] = useState([]);
    const [creacionesFavoritos,setFavoritos ] = useState([]);
    useEffect(() => {
        axios.get('/Creaciones.json')
            .then(response => {
                setCreaciones(response.data);
            })
            .catch(error => {
                console.error('Error', error);
            });
    }, []);

    useEffect(()=>{
        let a = localStorage.getItem('listaCreaciones');
        console.log("a "+a);
    },[]);
    useEffect(()=>{
        console.log(creacionesFavoritos)
    },[creacionesFavoritos]);
    const agregarFavorito = (creacion) => {
        const id = creacion.id.toString();
      
        // Verificar si el favorito ya existe en el array
        if (creacionesFavoritos.includes(id)) {
          // Si ya existe, eliminarlo
          const nuevosFavoritos = creacionesFavoritos.filter((favorito) => favorito !== id);
      
          // Verificar si la lista está vacía y, en ese caso, eliminarla
          if (nuevosFavoritos.length === 0) {
            localStorage.removeItem('listaCreaciones');
          } else {
            setFavoritos(nuevosFavoritos);
            localStorage.setItem('listaCreaciones', JSON.stringify(nuevosFavoritos));
          }
      
          console.log(`Quitando de favoritos el ID: ${id}`);
        } else {
          // Si no existe, agregarlo
          const nuevosFavoritos = [...creacionesFavoritos, id];
          setFavoritos(nuevosFavoritos);
          localStorage.setItem('listaCreaciones', JSON.stringify(nuevosFavoritos));
          console.log(`Agregando a favoritos el ID: ${id}`);
        }
      };
      
    return (
        <>
            <div className="container">
                <h2 className='tituloProd'>Mis creaciones</h2>
                {creaciones.map (c => (
                    <CadaCreacion className='titulo'  key={c.id} creacion={c}  onClick={() => agregarFavorito(c)} ></CadaCreacion>

                ))}
                
                <div className='foot'>
                    <Footer />
                </div>
            </div>
        </>
    );
}
export default MisCreaciones;
