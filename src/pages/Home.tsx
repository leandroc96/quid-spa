import { Container, Row, Col } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <section id="services" className="p-5">
        <Container>
          <ServicesSection />
        </Container>
      </section>
      <section id="about" className="p-5 bg-light">
        <Container>
          <AboutSection />
        </Container>
      </section>
      <section id="contact" className="p-5 bg-light">
        <Container>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}

export default Home;
