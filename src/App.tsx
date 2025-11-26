import { useState } from 'react'
import './App.css'
import Header from './components/header/Header.js'
import { Section } from './pages/section/section.js'
import { Footer } from './components/Footer/Footer.js'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Section/>
<div className="section-separator"></div>
    <Footer/>
    </>
  )
}

export default App
