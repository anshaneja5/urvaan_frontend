import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PlantCatalog from './pages/PlantCatalog'
import AddPlant from './pages/AddPlant'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<PlantCatalog />} />
          <Route path="/add-plant" element={<AddPlant />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 