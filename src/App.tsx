import React from 'react'
// import logo from './logo.svg'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Colors from './Colors'
import Header from './Header'
import Home from './Home'

function App () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colors" element={<Colors />} />
      </Routes>
    </div>
  )
}

export default App
