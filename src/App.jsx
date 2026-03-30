import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        < Hero />
        < AboutMe />
      </main>

      <footer>
        <p>© 2024 Sanzeta Tattoo - Medellín/Rionegro</p>
      </footer>
    </div>
  )
}

export default App
