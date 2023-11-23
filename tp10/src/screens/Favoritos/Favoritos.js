import '../Favoritos/Favoritos.css';
//import favYes from './../../assets/fav.png';
//import favNo from './../../assets/emptyFav.png';
import CadaCreacion from '../../components/CadaCreacion.js';

const Favoritos = ({listaFavoritos, sendDeleted}) => {
    
    const deleteItemHandler = (id) => {
        if(id != undefined){
            sendDeleted(id);
        }
    }
    
    return (
        <>
            <div className="containerCarrito" >hola
            { listaFavoritos && listaFavoritos.map
            (c => ( <CadaCreacion key={c.id} creacion={c} deleteItem={deleteItemHandler}/>))}
            </div>
        </>
    );
}

export default Favoritos;
