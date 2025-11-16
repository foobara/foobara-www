import React from 'react'
// import logo from './logo.svg'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Colors from './Colors'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Docs from './Docs'
import Videos from './Videos'
import Contact from './Contact'
import FoobArticles from './FoobArticles'
import HelpFoobara from './HelpFoobara'

function App () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/help-foobara" element={<HelpFoobara />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<FoobArticles />} />
        <Route path="/colors" element={<Colors />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
