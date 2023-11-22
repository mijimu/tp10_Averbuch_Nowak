import '../Favoritos/Favoritos.css';
import favYes from './../../assets/fav.png';
import favNo from './../../assets/emptyFav.png';
const Favoritos = () => {
    const listaCreaciones = localStorage.getItem('listaCreaciones');
    return (
        <>
            <img src={favNo} alt ='aj' className='favs'></img>
            <img src={favYes} alt ='aj' className='favs'></img>
        </>
    );
}

export default Favoritos;

