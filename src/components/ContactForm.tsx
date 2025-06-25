import { Container } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import "./ContactForm.css";

function ContactForm() {
  return (
    <section id="contacto" className="p-5 bg-light text-center">
      <Container>
        <h3 className="mb-4 section-title">Contacto</h3>
        <p className="fs-5">
          Para más información o consultas, escribinos a:
        </p>
        <p className="fs-4">
          <FaEnvelope className="me-2 text-primary" />
          <a href="mailto:info@quidconsultora.com" className="text-primary">
            info@quidconsultora.com
          </a>
        </p>
      </Container>
    </section>
  );
}

export default ContactForm;
