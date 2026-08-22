import './App.css'
import Hero from './components/hero/hero'
import ItemsCard from './components/itemCard/itemcard'
import LeatherSection from './components/leather/leather'
import Navbar from './components/navbar/navbar'
import ProductSection from './components/productSection/productsection'
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
      <ProductSection />
      <LeatherSection />
    </main>
  )
}

export default App
