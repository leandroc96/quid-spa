import { Container } from 'react-bootstrap';
import './HeroSection.css';


function HeroSection() {
  return (
    <section className="hero d-flex align-items-center text-center text-white">
      <Container>
        <h1 className="display-3 fw-bold"> Quid</h1>
        <p className="lead">Soluciones estratégicas en servicios de salud</p>
      </Container>
    </section>
  );
}

export default HeroSection;
