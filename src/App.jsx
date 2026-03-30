import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        {/* Sección Hero - Página 1 de tu PDF */}
        < Hero />

        {/* Aquí irán las demás secciones que crearemos luego */}
        <section id="portfolio"><h2>Portfolio</h2></section>
      </main>

      <footer>
        <p>© 2024 Sanzeta Tattoo - Medellín/Rionegro</p>
      </footer>
    </div>
  )
}

export default App
