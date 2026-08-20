import './App.css'
import Hero from './components/hero/hero'
import ItemsCard from './components/itemCard/itemcard'
import Navbar from './components/navbar/navbar'
import CategoryCard from './pages/categoryCard/categorycard'
import TrendingProducts from './pages/trendingCard/trendingcard'

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <ItemsCard />
      <TrendingProducts />
      <CategoryCard />
    </main>
  )
}

export default App
