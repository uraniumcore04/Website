import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/hero'
import Footer from './components/footer'
import About from './components/About'
import OurWork from './components/work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Home/>
<About/>
<OurWork/>
<Footer/>
    </>
  )
}

export default App
