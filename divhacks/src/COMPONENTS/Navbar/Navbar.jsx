import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">

        </div>
        <ul className='nav-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/feedbacks">Feedbacks</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
        
        <Link to="/login">
        <button className='login-btn'>Login</button>
      </Link>

    </nav>
  )
}

export default Navbar