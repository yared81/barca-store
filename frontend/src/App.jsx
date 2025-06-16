import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import ClubBanner from './components/banner'
import Home from './pages/home'
import Bestseller from './pages/bestseller'
import Training from './pages/training'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bestseller" element={<Bestseller />} />
            <Route path="/training" element={<Training />} />
          </Routes>     
            
        </main>
        <ClubBanner />  
        <Footer />
      </div>
    </Router>
  )
}

export default App
