import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import HomeView from './components/HomeView.jsx'
import ShoppingCartView from './components/ShoppingCartView.jsx'
import WomenView from './components/WomenView.jsx'
import MenView from './components/MenView.jsx'
import BrowseView from './components/BrowseView.jsx'
import AboutView from './components/AboutView.jsx'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/home" element={HomeView}/>
        <Route path="/women" element={WomenView}/>
        <Route path="/men" element={MenView}/>
        <Route path="/browse" element={BrowseView}/>
        <Route path="/about" element={AboutView}/>
        <Route path="/cart" element={ShoppingCartView}/>
      </Routes>
    </main>
  )
}

export default App;
