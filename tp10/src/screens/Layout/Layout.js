import { Link, Outlet } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../Layout/Layout.css';

const Layout = () => {


    return (
        <>
        <nav className='navBar'>
            <div className='divLinks'>
                <Link to='/Home' className='links'><Button className='buttonLayout'>Home</Button></Link>
                <br></br>
                <Link to='/MisCreaciones' className='links'><Button className='buttonLayout'>Mis creaciones</Button></Link>
                <br></br>
                
                <Link to='/InfoNuestra' className='links'><Button className='buttonLayout'>Nuestra Info</Button></Link>
                <br></br>
                <Link to='/Favoritos' className='links'><Button className='buttonLayout'>Favoritos</Button></Link>
                <br></br>
                {/*
                <Badge badgeContent={favorites.length} color="primary">
                    <img src={fav} alt="" className="favimg"></img>
    </Badge>*/}

                <br></br>
                
            </div>

            <Outlet></Outlet>
        </nav>


        <div className='containerAllPage'>
            <footer></footer>        
        </div>
        </>
    );
}

export default Layout;