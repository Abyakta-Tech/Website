import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Team from './components/Team'
import Error404 from './components/Error404'
import Navbar from './components/Navbar'
import { PropagateLoader } from 'react-spinners'
import { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])


  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-gray-800">
          <PropagateLoader color="#FFFFFF" size={50} />
        </div>
      ) : (
        <div className="bg-gray-800 min-h-screen">
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  )
}

export default App
