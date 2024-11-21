import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Error404 from './components/Error404'
import Navbar from './components/Navbar'
import { PacmanLoader } from 'react-spinners'
import { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])


  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-gray-800">
          <PacmanLoader color="#FFD700" size={50} />
        </div>
      ) : (
        <div className="bg-gray-800 h-screen">
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  )
}

export default App
