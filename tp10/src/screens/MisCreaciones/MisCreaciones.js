import CadaCreacion from '../../components/CadaCreacion';
import "../MisCreaciones/MisCreaciones.css";
//import favYes from './../../assets/fav.png';
//import favNo from './../../assets/emptyFav.png';
import axios from 'axios';
import Footer from "../../components/Footer.js";
import React, { useEffect, useState } from 'react';

const MisCreaciones = () => {

    const [creaciones, setCreaciones] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    useEffect(() => {
        axios.get('/Creaciones.json')
            .then(response => {
                setCreaciones(response.data);
            })
            .catch(error => {
                console.error('Error', error);
            });
    }, []);

    useEffect(() => {
        const a = localStorage.getItem('listaCreaciones');
        console.log(a);
    }, []);
    useEffect(() => {
        console.log(favoritos)
    }, [favoritos]);
    
    const agregarFavorito = (creacion) => {
        const id = creacion.id.toString();

        if (favoritos.includes(id)) {
            const nuevosFavoritos = favoritos.filter((favorito) => favorito !== id);

            if (nuevosFavoritos.length === 0) {
                localStorage.removeItem('listaCreaciones');
            } else {
                setFavoritos(nuevosFavoritos);
                localStorage.setItem('listaCreaciones', JSON.stringify(nuevosFavoritos));
            }

            console.log(`chau de favoritos el ID: ${id}`);
        } else {
            const nuevosFavoritos = [...favoritos, id];
            setFavoritos(nuevosFavoritos);
            localStorage.setItem('listaCreaciones', JSON.stringify(nuevosFavoritos));
            console.log(`Agregando a favoritos el ID: ${id}`);
        }
    };

    return (
        <>
            <div className="container">
                <h2 className='tituloProd'>Mis creaciones</h2>
                {creaciones.map(c => (
                    <CadaCreacion className='titulo' key={c.id} creacion={c} onClick={() => agregarFavorito(c)} ></CadaCreacion>

                ))}

                <div className='foot'>
                    <Footer />
                </div>
            </div>
        </>
    );
}
export default MisCreaciones;
