import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import HomeView from './components/HomeView.jsx'
import ShoppingCartView from './components/ShoppingCartView.jsx'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/home" element={HomeView}/>
        <Route path="/cart" element={ShoppingCartView}/>
      </Routes>
    </main>
  )
}

export default App;
