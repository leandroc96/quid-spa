import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src="/logo-quid.png" alt="Quid" className="hero-logo" />
        <h1>Consultoría integral en servicios de salud</h1>
        <p>
          Soluciones personalizadas para optimizar la gestión clínica, operativa y administrativa.
        </p>
        <a href="#about">
          <button>Conocenos</button>
        </a>
      </div>
    </section>
  );
};


export default HeroSection;
