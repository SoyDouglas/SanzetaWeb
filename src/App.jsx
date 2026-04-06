import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import PortfolioHome from './components/PortfolioHome';
import FullGallery from './components/FullGallery'; 
import BookingProcess from './components/BookingProcess';
import Info from './components/Info'; 
import HealthAndSafety from './components/HealthAndSafety';
import ReadyToInk from './components/ReadyToInk';
import Footer from './components/Footer';
import Contact from './components/Contact'; // 1. Importamos la nueva pestaña de contacto

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* El Navbar queda fuera de Routes para que sea global */}
        <Navbar /> 
        
        <main>
          <Routes>
            {/* RUTA 1: Página principal (Home) */}
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <AboutMe />
                  <PortfolioHome />
                  <HealthAndSafety />
                  <BookingProcess />
                  <ReadyToInk />
                </>
              } 
            />

            {/* RUTA 2: Galería completa */}
            <Route 
              path="/gallery" 
              element={<FullGallery />} 
            />

            {/* RUTA 3: Pestaña de Info */}
            <Route 
              path="/info" 
              element={<Info />} 
            />

            {/* RUTA 4: Pestaña de Contacto */}
            <Route 
              path="/contact" 
              element={<Contact />} 
            />
          </Routes>
        </main>

        {/* El Footer queda fuera de Routes para cerrar todas las páginas */}
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
