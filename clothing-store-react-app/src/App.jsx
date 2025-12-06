import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import HomeView from './components/HomeView.jsx'
import ShoppingCartView from './components/ShoppingCartView.jsx'
import WomenView from './components/WomenView.jsx'
import BrowseView from './components/BrowseView.jsx'
import AboutView from './components/AboutView.jsx'
import DashboardView from './components/DashboardView.jsx'
import Product from './components/Product.jsx'
import CartContextProvider from './components/CartContext.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = 'https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json'
    fetch(url)
      .then(resp => resp.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);


  return (
    <main>
      <CartContextProvider products={products}>
        <Header isLoggedIn={isLoggedIn} handleLogIn={() => {setIsLoggedIn(!isLoggedIn)}}/>
        <Routes>
          <Route path="/" element={<HomeView products={products} />} />
          <Route path="/women" element={<WomenView products={products} gender={true} />} />
          <Route path="/men" element={<WomenView products={products} gender={false} />} />
          <Route path="/browse" element={<BrowseView products={products} />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/cart" element={<ShoppingCartView products={products} />} />
          <Route path="/product/:name" element={<Product products={products} />} />
          <Route path="/dashboard" element={<DashboardView products={products} />} />
        </Routes>
        {isLoggedIn ? '' : <Footer />}
      </CartContextProvider>
    </main>
  )
}

export default App;
