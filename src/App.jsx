import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Testimonials from './Pages/Testimonials'
import ContactUs from './Pages/ContactUs'
import Gallary from './Pages/Gallary'
import Services from './Pages/Home/Services'
import Project from './Pages/Project'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} /> {/* 👈 This is the default route */}

        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='testimonials' element={<Testimonials/>}/>
        <Route path='contactus' element={<ContactUs/>}/>
        <Route path='gallary' element={<Gallary/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='projects' element={<Project/>}/>

        </Route>
      </Routes>
      
    </div>
  )
}

export default App