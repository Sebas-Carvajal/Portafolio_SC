import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contacts';
import Project from './pages/Projects';
import Skills from './pages/Skills';


function App() {
  return (
    <BrowserRouter basename="/Portafolio_SC">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Proyects" element={<Project />}/>
        <Route path="/Skills" element={<Skills />}/>
        <Route path="/Contacts" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
