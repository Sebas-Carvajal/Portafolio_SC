import "./Contacts.css"
import {Link} from 'react-router-dom';

function Contacts() {
  return (
    <div>
      <nav className="head">
        <ul className="lista">
          <li><Link to="/" className="nav-link">Main</Link></li>
          <li><Link to="/Skills" className="nav-link">Skill</Link></li>
          <li><Link to="/About" className="nav-link">About</Link></li>
          <li><Link to="/Proyects" className="nav-link">Project</Link></li>
        </ul>
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