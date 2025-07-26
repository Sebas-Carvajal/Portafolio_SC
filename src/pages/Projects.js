import "./Projects.css"
import {Link} from 'react-router-dom';


function Projects() {
  return (
    <div className="head"> 
      <nav>
        <ul className="lista">
          <li><Link to="/" className="nav-link">Main</Link></li>
          <li><Link to="/Skills" className="nav-link">Skill</Link></li>
          <li><Link to="/Contacts" className="nav-link">Contact</Link></li>
          <li><Link to="/About" className="nav-link">About</Link></li>
        </ul>
      </nav>

      <section id="Projects" class="projects-section">
  <h1>Proyectos</h1>

  <div class="project-category">
    <h2>Python</h2>
    <div class="project-list">
      <div class="project-card">
        <h3>Análisis de Datos con Pandas</h3>
        <p>Exploración de dataset financiero con visualizaciones usando Matplotlib y Seaborn.</p>
        <a href="#">Ver más</a>
      </div>
      <div class="project-card">
        <h3>Modelo de predicción</h3>
        <p>Modelo de regresión para predecir ventas en base a campañas de marketing.</p>
        <a href="#">Ver más</a>
      </div>
    </div>
  </div>

  <div class="project-category">
    <h2>Excel</h2>
    <div class="project-list">
      <div class="project-card">
        <h3>Dashboard de ventas</h3>
        <p>Automatización de reportes con fórmulas avanzadas, gráficos y segmentación.</p>
        <a href="#">Ver más</a>
      </div>
    </div>
  </div>

  <div class="project-category">
    <h2>Power BI</h2>
    <div class="project-list">
      <div class="project-card">
        <h3>Visualización de KPIs</h3>
        <p>Tablero interactivo para monitorear indicadores clave de desempeño de una empresa.</p>
        <a href="#">Ver más</a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Projects;