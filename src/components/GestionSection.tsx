import { Col, Container, Row } from 'react-bootstrap';
import './ServicesSection.css';
import ServiceCard from './ServiceCard';
import { FaHospital } from 'react-icons/fa';
import "./GestionSection.css"

function GestionSection() {
  const services = [  
  {
    Icon:FaHospital,
    title:"Programa PROA (Optimización de Antimicrobianos)",
    category: "Gestión",
    description:"Implementación de guías y protocolos adaptados, control de prescripción, seguimiento microbiológico y análisis de indicadores clínicos con informes de mejora."
  },
  {
    Icon:FaHospital,
    title:"Consultoría Modulada Online Médico-Médico",
    category: "Gestión",
    description:"Consultoría médica online en diversas especialidades y soporte itinerante para instituciones sin cobertura."
  },
  {
    Icon:FaHospital,
    title:"Auditoría clínica y operativa",
    category: "Gestión",
    description:"Auditoría de consumos, personal y tiempos clínicos para mejorar la gestión operativa y económica."
  },
  {
    Icon:FaHospital,
    title:"Evoluciones en historia clínica electrónica",
    category: "Gestión",
    description:"Evoluciones realizadas por profesionales matriculados y especialistas acreditados, garantizando calidad y validez clínica certificada."
  },
  {
    Icon:FaHospital,
    title:"Modelos de negocio y propuesta de valor",
    category: "Gestión",
    description:"Estrategias innovadoras para expansión y creación de valor en ecosistemas de salud, apoyadas en análisis de datos."
  },

]
  return (
    <section id="gestion" >
  <Container>
    <div className="text-center">
      <h3 id="gestion" className="section-title">Gestión Institucional</h3>
    </div>
    
    <Row className="gy-4">
      {services
        .filter(service => service.category === "Gestión")
        .map((service, idx) => (
          <Col md={4} key={idx}>
            <ServiceCard
              Icon={service.Icon}
              title={service.title}
              description={service.description}
            />
          </Col>
        ))}
    </Row>
  </Container>
</section>


  );
}

export default GestionSection;

