import "./Contacts.css"
import {Link} from 'react-router-dom';
import { useState } from "react";
function Contacts() {

  const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

  return (
    <div>
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
        <section id="Contact" class="contact-section">
          <h1>Contacto</h1>
          <div class="contact-info">
            <div class="contact-item">
              <h2>Teléfono</h2>
              <p>310 264 3396</p>
            </div>
            <div class="contact-item">
              <h2>Email</h2>
              <p><a href="mailto:sebastianandrescarvajallopez@gmail.com">Enviar Correo</a></p>
            </div>
            <div class="contact-item">
              <h2>LinkedIn</h2>
              <p><a href="https://www.linkedin.com/in/sebasti%C3%A1n-carvajal-b3ba51191" target="_blank">Ver perfil</a></p>
            </div>
          </div>
        </section>

      
    </div>
  );
}

export default Contacts;