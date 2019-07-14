import React from 'react'
import './navigation.scss'

function Navigation () {
  return (
    <nav className='header-nav'>
      <h3>Logo</h3>
      <ul className='nav-links'>
        <li>About</li>
        <li>Team</li>
        <li>News</li>
        <li>Portfolio</li>
      </ul>
    </nav>
  )
}

export default Navigation
