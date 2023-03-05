import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import NotFound from '../components/Error/NotFound'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Home from '../pages/home/Home'
import Projects from '../pages/projects/Projects'

const Router = () => {
  return (
<>

<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/projects' element={<Projects/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='*' element={<NotFound/>}/>

</Routes>
{/* <Route/> */}
  <Footer/>

</>

  )
}

export default Router;