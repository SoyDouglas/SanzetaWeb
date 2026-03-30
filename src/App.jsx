import './App.css'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        {/* Sección Hero - Página 1 de tu PDF */}
        <section id="hero">
          <h1>Tattoo Artist in Medellín</h1>
          <p>Custom and professional tattoos for travelers and expats.</p>
          <button className="btn-primary">BOOK YOUR TATTOO</button>
        </section>

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
