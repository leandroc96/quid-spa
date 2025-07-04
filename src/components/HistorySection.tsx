import './HistorySection.css';

export const HistorySection = () => {
  return (
    <section className="history-section">
      <div className="history-container">
        <div className="history-image">
          <img src="/persona.jpg" alt="Director de Quid" />
          <h3>Leandro Cabrera</h3>
          <p>Director General</p>
        </div>
        <div className="history-text">
          <h2>Nuestra historia</h2>
          <p>
            Quid nació con el propósito de transformar la gestión institucional en salud, combinando experiencia clínica, visión estratégica y tecnología aplicada. 
            Detectamos la necesidad de soluciones personalizadas y adaptadas a cada ecosistema hospitalario, y desde entonces desarrollamos herramientas y consultoría que
            permiten a las instituciones optimizar sus recursos, mejorar su atención y anticiparse a los desafíos del sector.
          </p>
        </div>
      </div>
    </section>
  );
};
