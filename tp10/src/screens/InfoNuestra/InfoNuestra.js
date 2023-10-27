import "../InfoNuestra/InfoNuestra.css";
import mijalpic from '../../assets/mijal.png';
import micapic from '../../assets/micaela.png';


const InfoNuestra = () => {


    return (
        <>
            

        <div>
            <h2>About Us</h2>
            <div className="containerInfo">
                <div className="cadaUna">
                    <img src={mijalpic} alt="Mijal" className="pics" />
                    <h3>Mijal</h3>
                    
                </div>
                <div className="cadaUna">
                    <img src={micapic} alt="Micaela" className="pics" />
                    <h3>Micaela</h3>
                    
                </div>
                
            </div><p>Estudiantes del último año de secundaria en Ort Argentina.</p>
            <p>Sea quien sea que estes viendo esto, chill out después ponemos fotos de estudiantes reales!!</p>
        </div>

        </>
    );
}

export default InfoNuestra;

