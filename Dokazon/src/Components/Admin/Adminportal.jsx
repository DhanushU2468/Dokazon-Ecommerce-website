import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Navbar from '../Navbar'
import About from '../Pages/About'
import Viewmore from '../Pages/Viewmore'
const Adminportal = () => {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/viewmore/:id' element={<Viewmore/>}/>
        </Routes>
    </>
  )
}

export default Adminportal
