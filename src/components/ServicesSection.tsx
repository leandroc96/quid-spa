import { Col, Container, Row } from 'react-bootstrap';
import './ServicesSection.css';
import ServiceCard from './ServiceCard';
import { FaHospital } from 'react-icons/fa';

function ServicesSection() {
  const services = [
  {
    Icon:FaHospital,
    title:"Soporte en Estrategia Institucional",
    category: "Gestión",
    description:"Diseñamos estrategias de gestión y mejora continua, integrando algoritmos clínicos y operativos adaptados a cada ecosistema institucional."
  },
  {
    Icon:FaHospital,
    title:"Facturación y Recupero",
    category: "Gestión",
    description:"Detección de cuellos de botella y rediseño de procesos para optimizar la facturación y el recupero, con indicadores específicos adaptados a cada financiador."
  },
  {
    Icon:FaHospital,
    title:"Informes de Gestión",
    category: "Gestión",
    description:"Seguimiento de producción y métricas clave mediante dashboards personalizados y modelos predictivos."
  },
  {
    Icon:FaHospital,
    title:"Farmacoeconomía",
    category: "Gestión",
    description:"Análisis integral de consumos por N° de camas, seguimiento de medicamentos de alto costo y control de adherencia, optimizando recursos y protocolos clínicos institucionales."
  },
  {
    Icon:FaHospital,
    title:"Módulos no asistenciales",
    category: "Gestión",
    description:"Entrenamiento y soporte integral en gestión clínica, legal y administrativa para servicios no asistenciales."
  },
  {
    Icon:FaHospital,
    title:"Informes técnicos",
    category: "Gestión",
    description:"Análisis de imágenes y electrocardiogramas con tecnología interoperable para informes precisos."
  },
  {
    Icon:FaHospital,
    title:"Programa PROA (Optimización de Antimicrobianos)",
    category: "Asistencial",
    description:"Implementación de guías y protocolos adaptados, control de prescripción, seguimiento microbiológico y análisis de indicadores clínicos con informes de mejora."
  },
  {
    Icon:FaHospital,
    title:"Consultoría Modulada Online Médico-Médico",
    category: "Asistencial",
    description:"Consultoría médica online en diversas especialidades y soporte itinerante para instituciones sin cobertura."
  },
  {
    Icon:FaHospital,
    title:"Auditoría clínica y operativa",
    category: "Asistencial",
    description:"Auditoría de consumos, personal y tiempos clínicos para mejorar la gestión operativa y económica."
  },
  {
    Icon:FaHospital,
    title:"Evoluciones en historia clínica electrónica",
    category: "Asistencial",
    description:"Evoluciones realizadas por profesionales matriculados y especialistas acreditados, garantizando calidad y validez clínica certificada."
  },
  {
    Icon:FaHospital,
    title:"Modelos de negocio y propuesta de valor",
    category: "Asistencial",
    description:"Estrategias innovadoras para expansión y creación de valor en ecosistemas de salud, apoyadas en análisis de datos."
  },

]
  return (
    <section id="services" className="p-5 bg-light">
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
    <div className='text-center'>
      <h3 id="asistencial" className="mb-4 mt-5 text-center section-title">Servicios Asistenciales</h3>
    </div>
    
    <Row className="gy-4">
      {services
        .filter(service => service.category === "Asistencial")
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

export default ServicesSection;

