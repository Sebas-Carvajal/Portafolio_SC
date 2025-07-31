import "./Skills.css"
import {Link} from 'react-router-dom';
import { useState } from "react";

function Skills() {

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