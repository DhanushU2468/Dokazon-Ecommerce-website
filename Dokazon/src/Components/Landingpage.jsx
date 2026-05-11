import React from 'react'
import {Routes,Route} from 'react-router-dom'
const Landingpage = () => {
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

export default Landingpage
