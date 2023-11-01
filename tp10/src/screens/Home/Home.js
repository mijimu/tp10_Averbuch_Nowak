import "../Home/Home.css";
import Footer from "../../components/Footer.js";
//import avatar from "../../assets/img_avatar.png";

const Home = () => {


    return (
        <div>
            <div className='containerFoto'>
                <div class="overlay">
                <div class="text">Mijal</div>
                </div>
                <div class="overlay2">
                <div class="text">Micaela</div>
                </div>
            </div>
            <div className='foot'>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Home;

