import React from 'react'
// import logo from './logo.svg'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Colors from './Colors'
import Header from './Header'
import Home from './Home'
import Docs from './Docs'
import Videos from './Videos'

function App () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/colors" element={<Colors />} />
      </Routes>
    </div>
  )
}

export default App
