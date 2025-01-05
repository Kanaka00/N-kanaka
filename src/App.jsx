import React from 'react'
import NavBar from './NavPage'
import Homepage from './Pages/HomePage'
import { Routes,Route } from 'react-router-dom'
import Aboutpage from './pages/AboutPages'
import SkillsPage from './Pages/Skills'
import ContactPage from './Pages/ContactPage'
import Footer from './Pages/Footer'
import ResumePage from './Pages/ResumePage'

const App = () => {
  return (

   <>
   <NavBar/>
     <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="about" element={<Aboutpage/>}/>
        <Route path="skills" element={<SkillsPage/>}/>
        <Route path="resume" element={<ResumePage/>}/>
        <Route path="contact" element={<ContactPage/>}/>
      </Routes>
     </div>
     <Footer/>
   </>
  )
}

export default App