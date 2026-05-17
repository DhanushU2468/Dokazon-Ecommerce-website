import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/styles/myappdesign.css'
import logo1 from '../assets/photos/dokaz.png'
const Navbar = () => {
  return (
    <div>

      <div className="navbar">
        <div className="logo">
             <img src={logo1} alt="" />
        </div>

        <div className="links">
            <ul>
            <li><NavLink to='/adminportal'>Home</NavLink></li>
            <li><NavLink to='/adminportal/about'>About</NavLink></li>
            <li><NavLink to='/adminportal/product'>Product</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
