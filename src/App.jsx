import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/index.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Footer />  
      <Home />
    </>
  )
}

export default App
