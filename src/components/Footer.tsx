import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Quid - Consultora de Servicios de Salud</h5>
            <p>
              Av. Siempre Viva 1234<br />
              Ciudad Autónoma de Buenos Aires<br />
              Argentina
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <h5>Contacto</h5>
            <p>Email: contacto@quid.com.ar</p>
            <p>Teléfono: +54 9 11 1234 5678</p>
            <div>
                
                <a href="https://linkedin.com/company/quid" target="_blank" rel="noreferrer" className="text-light me-3" aria-label="LinkedIn">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer" className="text-light" aria-label="WhatsApp">
                    <FaWhatsapp size={24} />
                </a>
            </div>

          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Quid. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}

export default Footer;
