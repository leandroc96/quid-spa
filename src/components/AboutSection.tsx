import { Container } from 'react-bootstrap';

function AboutSection() {
  return (
    <section id="about" className="p-5">
      <Container>
        <h2 className="mb-4">Mision</h2>
        <p>
          Somos un equipo multi e interdisciplinario de profesionales,  médicos y no médicos especializados en gestión sanitaria integral, orientado a transformar y eficientizar los procesos en salud en todos sus ecosistemas.
Nuestro objetivo es intervenir estratégicamente en los distintos silos del sistema, con una mirada transversal que permita optimizar costos operativos, rediseñar circuitos y desarrollar nuevas unidades de negocio, alineadas con las necesidades reales del mercado Argentino con entidad loco-regional.
Integramos a especialistas de diversas disciplinas: medicina, ingeniería, derecho, análisis financiero, enfermería, farmacia, entre otras. Nuestra misión es acompañar a las organizaciones en su transición hacia modelos de atención basados en valor, con soporte modular, asesoría externa continua, análisis operativo e información accionable.

        </p>
        <h2 className="mb-4">Vision</h2>
        <p>
          Aspiramos a consolidarnos como referente en consultoría sanitaria integral, promoviendo modelos de atención eficientes, sustentables, seguros y centrados en la realidad del sistema de salud. Sostenemos la interoperabilidad de los datos clínicos como eje clave, asegurando su trazabilidad y privacidad. 
Apuntamos a fortalecer la sostenibilidad financiera del sistema mediante el uso responsable de los recursos, la eficacia terapéutica y la colaboración activa de todos los actores involucrados. 

        </p>
      </Container>
    </section>
  );
}

export default AboutSection;
