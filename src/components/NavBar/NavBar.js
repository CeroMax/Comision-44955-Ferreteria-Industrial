import CardWidget from "../CardWidget/CardWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";


function NavBar () {
    return(
        <div>
            <CardWidget />
            <>
              <Navbar  bg="dark" variant="dark" >
                <Container className="navBar">
                  <Navbar.Brand href="#home">Inicio</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="#contacto">Contactos</Nav.Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="#herramientas mano">Herramientas de Mano</Nav.Link>
                    <Nav.Link href="#herramientas electricas">Herramientas Electricas</Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
            </>
        </div>
    );
}
export default NavBar;