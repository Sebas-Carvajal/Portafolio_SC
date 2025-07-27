import "./Projects.css"
import {Link} from 'react-router-dom';


function Projects() {
  return (
    <div > 
      <nav className="head">
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
                <p>Proyecto de análisis de datos donde se utilizó Pandas para limpiar, estructurar y 
                  preparar un conjunto de datos relacionado con delitos cometidos en la India, 
                  clasificados por año, tipo de crimen y estado.
                  La información fue posteriormente visualizada en Power BI mediante dashboards interactivos
                   que permiten filtrar dinámicamente por crimen, año o región.Este análisis facilita la 
                   comprensión de patrones delictivos y la identificación de tendencias por estado o tipo de delito.
                </p>
               <a href="/Portafolio_SC/images/analisis-crimen-india.png" target="_blank" rel="noopener noreferrer">
                 Ver más
               </a>

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