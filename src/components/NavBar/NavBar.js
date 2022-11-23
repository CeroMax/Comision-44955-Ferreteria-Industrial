
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import logonuevo2 from "../../assets/logonuevo2-min.png";
import {CartWidget} from "../CardWidget/CardWidget";



function NavBar () {

    

    return(
        <div>
            <div className='NavBar-Texto'>
                <img className='Alinear' src={logonuevo2} alt="" />
                <h1 className='Titulo'>Ferreteria Industrial "Florida"</h1>
            </div>
            <nav>
              <Navbar  bg="dark" variant="dark"  >
                <Container className="navBar">
                  <Navbar.Text className="titulo" href="#home">Ferreteria</Navbar.Text>
                  <Nav>
                    <Nav.Link href="#Inicio">Inicio</Nav.Link>
                    <Nav.Link href="#Contacto">Contacto</Nav.Link>
                    <Nav.Link href="#Herramientas mano">Herramientas de Mano</Nav.Link>
                    <Nav.Link href="#Herramientas electricas">Herramientas Electricas</Nav.Link>
                  </Nav>
                  <CartWidget/>
                </Container>
                
              </Navbar>
            </nav>
        </div>
    );
}
export default NavBar;