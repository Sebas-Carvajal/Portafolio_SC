import "./Skills.css"
import {Link} from 'react-router-dom';

function Skills() {
  return (
    <div >
      <nav className="head">
        <ul className="lista">
          <li><Link to="/" className="nav-link">Main</Link></li>
          <li><Link to="/About" className="nav-link">About</Link></li>
          <li><Link to="/Contacts" className="nav-link">Contact</Link></li>
          <li><Link to="/Proyects" className="nav-link">Project</Link></li>
        </ul>
      </nav>

      <section id="Skills" class="skills-section">
  <h1>Skills</h1>
  <div class="skills-container">
    <div class="skill-item">
      <h2>Lenguajes y Herramientas</h2>
      <ul>
        <li>Python (Pandas, NumPy)</li>
        <li>HTML, CSS, JavaScript básico</li>
        <li>Excel (intermedio-avanzado)</li>
      </ul>
    </div>
    <div class="skill-item">
      <h2>Otros conocimientos</h2>
      <ul>
        <li>Lógica de programación</li>
        <li>Mantenimiento de equipos</li>
        <li>Manejo de bases de datos básicas</li>
      </ul>
    </div>
    <div class="skill-item">
      <h2>Diseño gráfico</h2>
      <ul>
        <li>Corel Draw</li>
        <li>Photoshop</li>
      </ul>
    </div>
  </div>
</section>

    </div>
  );
}

export default Skills;