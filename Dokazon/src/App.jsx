import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Landingpage from './Components/Landingpage'
const App = () => {
  return (
    <>
    <div id='dokazon'>
        <Routes>
            <Route element={<Landingpage/>} path='/'/>
        </Routes>
    </div>
    </>
  )
}

export default App
