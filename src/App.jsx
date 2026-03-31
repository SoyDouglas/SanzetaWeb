import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import PortfolioHome from './components/PortfolioHome';
import FullGallery from './components/FullGallery'; 
import BookingProcess from './components/BookingProcess';
import Info from './components/Info'; // 1. Importa el nuevo componente
import HealthAndSafety from './components/HealthAndSafety';

function App() {
  return (
    <Router>
      <Routes>
        {/* RUTA 1: Página principal */}
        <Route 
          path="/" 
          element={
            <div className="app-container">
              <Navbar />
              <main>
                <Hero />
                <AboutMe />
                <PortfolioHome />
                <HealthAndSafety />
                <BookingProcess />
              </main>
              <footer>
                <p>© 2026 Sanzeta Tattoo - Medellín/Rionegro</p>
              </footer>
            </div>
          } 
        />

        {/* RUTA 2: Galería completa */}
        <Route 
          path="/gallery" 
          element={<FullGallery />} 
        />

        {/* RUTA 3: Nueva pestaña de Info */}
        <Route 
          path="/info" 
          element={<Info />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
