import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Header from './components/header.jsx'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        {/* Put Routes Here */}
      </Routes>
    </main>
  )
}

export default App
