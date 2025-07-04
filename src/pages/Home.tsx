import { Container } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import GestionSection from '../components/GestionSection';
import '../App.css';
import { HistorySection } from '../components/HistorySection';

function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about" className="p-5 bg-light">
        <Container>
          <AboutSection />
        </Container>
      </section>
      <section id="history" className="p-5 bg-light">
        <Container>
          <HistorySection />
        </Container>
      </section>

      <section id="services" className="p-5 bg-quid">
        <Container>
          <ServicesSection />
        </Container>
      </section>
      
      <section id="gestion" className="p-5 bg-quid">
        <Container>
          <GestionSection />
        </Container>
      </section>
      
      <section id="contact" className="p-5 ">
        <Container>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}

export default Home;
