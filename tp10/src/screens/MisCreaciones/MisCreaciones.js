import CadaCreacion from '../../components/CadaCreacion';
import "../MisCreaciones/MisCreaciones.css";
import favYes from './../../assets/fav.png';
import favNo from './../../assets/emptyFav.png';

const MisCreaciones = ({ creaciones, listaCreaciones }) => {
    console.log('en mis creaciones');
    return (
        <>
            <div className="container">
                <h2 className='tituloProd'>Mis creaciones</h2>
                <CadaCreacion className='titulo' creaciones={creaciones} listaCreaciones={listaCreaciones}></CadaCreacion>
                <img src={favNo} alt='favNo' className='favs'></img>
                <img src={favYes} alt='favNo' className='favs'></img>
            </div>
        </>
    );
}
export default MisCreaciones;
