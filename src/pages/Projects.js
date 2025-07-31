import "./Projects.css"
import {Link} from 'react-router-dom';
import { useState } from "react";
import DashBoard1 from "../Images/analisis-crimen-india.png";
import DashBoard2 from "../Images/DashBoard1.png";
import DashBoard3 from "../Images/DashBoard2.png";
/*
  Con el anterior se trae una imagen desde otra carpeta.
  Los dos puntos (..) significan que desde aquí me tocó retroceder dos niveles y luego entrar en la carpeta Images.
*/

function Projects() {

const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div > 
      <nav className="head">
        <button className="button_main" onClick={toggleMenu}>
          <img className="menu_img" src="./menu.png" alt="menu icon" />
        </button>

        {showMenu && (
          <ul className="lista">
            <Link to="/" className="nav-link">Main</Link>
            <Link to="/About" className="nav-link">About</Link>
            <Link to="/Skills" className="nav-link">Skill</Link>
            <Link to="/Contacts" className="nav-link">Contact</Link>
            <Link to="/Proyects" className="nav-link">Project</Link>
          </ul>
        )}
      </nav>

      <section id="Projects" class="projects-section">
          <h1>Proyectos</h1>

          <div class="project-category">
            <h2>Python</h2>
            <div class="project-list">
              <div class="project-card">
                <h3>Análisis de Datos con Pandas 1</h3>
                <h2>Exploración de dataset de Crímenes en la India (2001–2013)</h2>
                <p>Proyecto de análisis de datos donde se utilizó <strong>Pandas</strong> para limpiar, estructurar y 
                  preparar un conjunto de datos relacionado con delitos cometidos en la India, 
                  clasificados por año, tipo de crimen y estado.
                  La información fue posteriormente visualizada en <strong>Power BI</strong> mediante dashboards interactivos
                   que permiten filtrar dinámicamente por crimen, año o región.Este análisis facilita la 
                   comprensión de patrones delictivos y la identificación de tendencias por estado o tipo de delito.
                </p>
               <a href={DashBoard1} target="_blank" rel="noopener noreferrer">Imagen Power-Bi</a>
              </div>
              
              <div class="project-card">
                <h3>Análisis de Datos con Pandas 2</h3>
                <h2>Análisis Datos Estudiantiles</h2>
                <p> Proyecto de análisis de datos en el que se utilizó <strong>Pandas</strong> para limpiar, estructurar y preparar un conjunto de datos relacionado con el rendimiento académico de estudiantes.
                    La información incluía códigos de estudiante, número de quices presentados y la nota máxima obtenida en cada uno. 
                    A partir de estos datos se añadió una columna que determina si el estudiante aprobó o reprobó, y se calculó la cantidad total de aprobados y reprobados.
                    <br/>
                    Finalmente, los datos fueron visualizados en <strong>Power BI</strong> a través de dashboards interactivos que permiten filtrar dinámicamente por estado (aprobado o reprobado), facilitando así el análisis comparativo de rendimiento.
                </p>
               <a href={DashBoard3} target="_blank" rel="noopener noreferrer">Imagen Power-Bi</a>
              </div>

              <div class="project-card">
                <h3>Análisis de Datos con Pandas 3</h3>
                <h2>World Happiness Report</h2>
                <p>  Proyecto de análisis de datos en el que se utilizó <strong>Pandas</strong> para limpiar, estructurar y preparar un conjunto de datos sobre los niveles de felicidad a nivel mundial.
                     La información incluía variables como expectativa de vida, puntuaciones de felicidad por país, niveles de corrupción, generosidad, entre otros factores sociales y económicos.
                    <br/>
                     Dado que los datos estaban distribuidos en archivos independientes desde el año 2015 hasta 2019, se realizó una concatenación controlada de los mismos, unificando su estructura para permitir un análisis temporal consistente.
                     El enfoque principal fue explorar la relación entre la felicidad promedio de cada país y su expectativa de vida, considerando además la posible influencia de variables como la generosidad y la corrupción.
                    <br/>
                    Finalmente, los resultados fueron visualizados en <strong>Power BI</strong> mediante dashboards interactivos, que facilitaron la exploración visual y comparativa de los indicadores clave a lo largo de los años.
                </p>
               <a href={DashBoard2} target="_blank" rel="noopener noreferrer">Imagen Power-Bi</a>
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
</section>

    </div>
  );
}

export default Projects;