import {Link, Outlet} from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Layout = () => {
    return (
        <>
            
                <div className='divLinks'> 
                    <Link to='/Home' className='links'><Button  className='buttonLayout'>Home</Button></Link>
                    <br></br>
                    <Link to='/InfoNuestra' className='links'><Button className='buttonLayout'>Nuestra Info</Button></Link>
                    <br></br>
                    <Link to='/Favoritos' className='links'><Button className='buttonLayout'>Favoritos</Button></Link>
                    <br></br>
                    <Link to='/MisCreaciones' className='links'><Button className='buttonLayout'>Mis creaciones</Button></Link>
                </div>
        
        <Outlet></Outlet>
        </>
    );
}

export default Layout;