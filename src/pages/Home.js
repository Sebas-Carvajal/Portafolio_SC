import {Link} from 'react-router-dom';
import "./Home.css"


function Home() {
  return (
  <div className='Home'>
      <div className="box">
      <h1>¡Hola! Soy Sebastián</h1>
      <p className='parrapho'>Apasionado por los datos y la tecnología.</p>
      <p className='parrapho'>Bienvenido a mi portafolio</p>
      <Link to="/about"><button className='button'>Entrar</button></Link> 
      {/* lo anterior es una forma de con un boton ir a un lugar con el link*/}
    </div>
  </div>
  );
}

export default Home;