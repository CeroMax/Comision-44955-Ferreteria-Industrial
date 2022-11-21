import CardWidget from "../CardWidget/CardWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import { Contador } from "../Contador/Contador";
import CarroCompras from "../CarroCompras/CarroCompras";




function NavBar () {
    return(
        <div>
            <CardWidget />
            <>
              <Navbar  bg="dark" variant="dark" >
                <Container className="navBar">
                  <Navbar.Text className="titulo" href="#home">Ferreteria</Navbar.Text>
                  <Nav className="me-auto">
                    <Nav.Link href="#Inicio">Inicio</Nav.Link>
                    <Nav.Link href="#Contacto">Contacto</Nav.Link>
                    <Nav.Link href="#Herramientas mano">Herramientas de Mano</Nav.Link>
                    <Nav.Link href="#Herramientas electricas">Herramientas Electricas</Nav.Link>
                  </Nav>
                  <CarroCompras/>
                  <Contador stock={10}/>
                </Container>
                
              </Navbar>
            </>
        </div>
    );
}
export default NavBar;