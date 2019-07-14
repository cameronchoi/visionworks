import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.scss'

function Navigation () {
  return (
    <nav className='header-nav'>
      <Link to='/' className='nav-link'>
        <h3>Logo</h3>
      </Link>
      <ul className='nav-links'>
        <Link to='/about' className='nav-link'>
          <li>About</li>
        </Link>
        <Link to='/team' className='nav-link'>
          <li>Team</li>
        </Link>
        <Link to='/news' className='nav-link'>
          <li>News</li>
        </Link>
        <Link to='/portfolio' className='nav-link'>
          <li>Portfolio</li>
        </Link>
        <Link to='/contact' className='nav-link'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navigation
