import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.scss'
import visionworks from '../../assets/images/White ver.png'

function Navigation () {
  return (
    <nav className='header-nav'>
      <Link to='/' className='logo-link'>
        <img src={visionworks} alt='Logo' width='280' />
      </Link>
      <ul className='nav-links'>
        <Link to='/about' className='nav-link'>
          <li>ABOUT</li>
        </Link>
        <Link to='/team' className='nav-link'>
          <li>TEAM</li>
        </Link>
        <Link to='/news' className='nav-link'>
          <li>NEWS</li>
        </Link>
        <Link to='/portfolio' className='nav-link'>
          <li>PORTFOLIO</li>
        </Link>
        <Link to='/contact' className='nav-link'>
          <li>CONTACT</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navigation
