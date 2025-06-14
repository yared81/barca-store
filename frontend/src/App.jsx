import { useState, useEffect } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    // Update theme class on body
    document.body.className = theme
    // Save theme preference
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app ${theme}`}>
      <Header onThemeToggle={toggleTheme} currentTheme={theme} />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
