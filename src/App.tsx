import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className="bg-gray-800 h-screen">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
