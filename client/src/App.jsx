import './styles/home.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { garages } from './data/garages'
import GarageCard from './components/GarageCard'

function App() {
  return (
  <div>
    <Header />
    <main className="container">
  <div className="grid">
    {garages.map((g) => (
      <GarageCard key={g.id} nome={g.nome} tipo={g.tipo} cidade={g.cidade} preco={g.preco} />
    ))}
  </div>
</main>
    <Footer />

  </div>
  )
}

export default App