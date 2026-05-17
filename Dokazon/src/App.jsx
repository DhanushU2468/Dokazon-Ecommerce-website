import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Landingpage from './Components/Landingpage'
import './assets/styles/myappdesign.css'
import Adminportal from './Components/Admin/Adminportal'
import Userprotal from './Components/Users/Userprotal'
import Viewmore from './Components/Pages/Viewmore'
const App = () => {
  return (
    <>
    <div className='dokazon-design'>
        <Routes>
            <Route element={<Landingpage/>} path='/'/>
            <Route element={<Adminportal/>} path='/adminportal/*'/>
            <Route element={<Userprotal/>} path='/userportal/*'/>
            
        </Routes>
    </div>
    </>
  )
}

export default App
