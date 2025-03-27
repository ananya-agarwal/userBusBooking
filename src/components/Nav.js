import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='nav-item'>
        <Link to='/userBusBooking'>Home</Link>
        <span></span>
      </div>
      <div className='nav-item'>
        <Link to='./Contact'>Contact Us</Link>
        <span></span>
      </div>
      <div className='nav-item'>
        <Link to='/Admin'>Admin</Link>
        <span></span>
      </div>
    </nav>
  )
}

export default Nav
