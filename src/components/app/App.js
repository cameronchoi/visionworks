import React from 'react'
import logo from '../../assets/images/logo.svg'
import './App.css'
import Navigation from '../header/Navigation'
import About from '../about/About'
import Contact from '../contact/Contact'
import News from '../news/News'
import Team from '../team/Team'
import Portfolio from '../portfolio/Portfolio'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Route path='/about' component={About} />
        <Route path='/news' component={News} />
        <Route path='/team' component={Team} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </div>
    </Router>
  )
}

export default App
