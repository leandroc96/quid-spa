import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top" variant="light">
  <Container>
    <Navbar.Brand href="#">
      <img src="/logo-quid.png" alt="Quid" width="150" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#asistencial">Servicios</Nav.Link>
        <Nav.Link href="#gestion">Gestión</Nav.Link>
        <Nav.Link href="#contact">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
    </Navbar>


  );
}

export default NavigationBar;
