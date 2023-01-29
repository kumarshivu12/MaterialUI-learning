import React from 'react'
import {NavLink }from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='navbar'>
            <li><NavLink to="/" className="nav-bar-link">Home Page</NavLink></li>
            <li><NavLink to="/about" className="nav-bar-link">About Page</NavLink></li>
            <li><NavLink to="/contact" className="nav-bar-link">Contact Page</NavLink></li>
            <li><NavLink to="/help" className="nav-bar-link">Help Page</NavLink></li>
            <li><NavLink to="/kumar" className="nav-bar-link">404 Page</NavLink></li>
            <li><NavLink to="/login" className="nav-bar-link">Login</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar