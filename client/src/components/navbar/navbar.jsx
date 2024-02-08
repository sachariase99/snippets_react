import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className='flex bg-black'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/loader">Loader</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/repeater">Text Repeater</Link></li>
        <li><Link to="/fetches">Fetches</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
