
/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';*/

import logonuevo2 from '../../assets/fotos/logonuevo2-min.png';
import './estilosNavBar.css';
import {CartWidget} from '../CartWidget/CartWidget';
import { NavLink,Link} from 'react-router-dom';


function NavBar (){
    return(
        <>
            
            <div className='NavBar-Texto'>
                <img className='Alinear' src={logonuevo2} alt="" />
                <h1 className='Titulo'>Ferreteria Industrial "Florida"</h1>
            </div>
            <nav className='Menu'>
                <div style={{display:"flex"}} className='Margenes-Contenedor'>
                    <NavLink className='Margenes Titulo' to="/">Inicio</NavLink>
                    <NavLink className='Margenes Titulo' to="herramientas/herramientas electricas">Herramientas Electricas</NavLink>
                    <NavLink className='Margenes Titulo' to="herramientas/herramientas mano">Herramientas Mano</NavLink>
                    <NavLink className='Margenes Titulo' to="/contacto">Contacto</NavLink>
                    <NavLink className='Margenes Titulo' to="/nosotros">Nosotros</NavLink>
                    {/*<NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/Eventos">Eventos</NavLink>*/}
                
                </div>
                <NavLink to={"/cart"}>
                    <div className='EstiloCarro'>
                        <CartWidget />
                    </div>
                </NavLink>
            </nav>
        </>
    );
}

export default NavBar;