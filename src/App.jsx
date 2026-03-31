import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import PortfolioHome from './components/PortfolioHome';
import FullGallery from './components/FullGallery'; // Ahora sí lo encontrará
import BookingProcess from './components/BookingProcess';

function App() {
  return (
    <Router>
      <Routes>
        {/* RUTA 1: Tu página principal con el Hero, About y el Abanico 3D */}
        <Route 
          path="/" 
          element={
            <div className="app-container">
              <Navbar />
              <main>
                <Hero />
                <AboutMe />
                <PortfolioHome />
                < BookingProcess />
              </main>
              <footer>
                <p>© 2026 Sanzeta Tattoo - Medellín/Rionegro</p>
              </footer>
            </div>
          } 
        />

        {/* RUTA 2: La pestaña nueva que se abre al dar clic en el botón */}
        <Route 
          path="/gallery" 
          element={<FullGallery />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
