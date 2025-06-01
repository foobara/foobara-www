import React from 'react'
// import logo from './logo.svg'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Colors from './Colors'
import Header from './Header'
import Home from './Home'
import Docs from './Docs'
import Videos from './Videos'
import Contact from './Contact'
import Community from './Community'
import FoobArticles from './FoobArticles'

function App () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<FoobArticles />} />
        <Route path="/colors" element={<Colors />} />
      </Routes>
    </div>
  )
}

export default App
