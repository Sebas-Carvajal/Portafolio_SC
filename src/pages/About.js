import "./About.css"
import {Link} from 'react-router-dom';

function About() {
  return (
    <div > 
      <nav className="head">
        <ul className="lista">
          <li><Link to="/" className="nav-link">Main</Link></li>
          <li><Link to="/Skills" className="nav-link">Skill</Link></li>
          <li><Link to="/Contacts" className="nav-link">Contact</Link></li>
          <li><Link to="/Proyects" className="nav-link">Project</Link></li>
        </ul>
      </nav>

      <div className="presentation">
            <div className="left">
              <h1 className="title">My Portafolio</h1>
              <div className="image">
                <img src="/user.png" alt="Profile" />
              </div>
            </div>
            <div className="right">
              <h1>Hola, soy Sebastián Andres Carvajal Lopez</h1>
              <h2>Analista y futuro ingeniero de datos</h2>
              <h2>Estudiante de Ingenieria en Sistemas</h2>
            </div>
          </div>

      <div className="About">
         <h1>About me</h1>
          <p>
            Estudiante de Ingeniería de Sistemas y Computación con formación técnica en redes y sistemas. Me especializo en el 
            análisis y tratamiento de datos, aplicando habilidades de aprendizaje autónomo y pensamiento lógico para resolver problemas.
            Actualmente enfocado en formarme como ingeniero de datos, con experiencia en el uso de Python, especialmente con bibliotecas 
            como Pandas para manipulación y análisis de datos. Tengo conocimientos en mantenimiento preventivo y correctivo de equipos de
            cómputo, así como fundamentos en desarrollo web (HTML, CSS, JavaScript básico).
            Además, he trabajado con Excel para optimizar la visualización y presentación de datos, y tengo nociones básicas de diseño 
            gráfico en Corel Draw y Photoshop.
            Estoy desarrollando proyectos propios con datos reales, y mi objetivo es fortalecer habilidades en la ingeniería y arquitectura 
            de datos, con enfoque en soluciones que impacten positivamente a nivel organizacional.
          </p>
      </div>
    </div>
  );
}

export default About;