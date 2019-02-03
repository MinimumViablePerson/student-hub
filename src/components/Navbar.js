import React from 'react'
import { Link } from 'react-router-dom'

import FlatironLogo from './FlatironLogo'
import './Navbar.css'

const Navbar = props =>
  <div className='navbar'>
    <h1 className='navbar-title'><Link to='/'><FlatironLogo /></Link> Student Hub</h1>
  </div>

export default Navbar
