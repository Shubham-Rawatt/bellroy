import './App.css'
import Footer from './components/footer/footer'
import Hero from './components/hero/hero'
import ImageSection from './components/imagesection/imagesection'
import ItemsCard from './components/itemCard/itemcard'
import LeatherSection from './components/leather/leather'
import Navbar from './components/navbar/navbar'
import ProductSection from './components/productSection/productsection'
import FillForm from './components/sign/sign'
import YourStyle from './components/yourstyle/yourstyle'
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
      <YourStyle />
      <ImageSection />
      <FillForm/>
      <Footer />
    </main>
  )
}

export default App
