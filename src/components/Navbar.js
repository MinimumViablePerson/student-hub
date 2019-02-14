import React from 'react'
import { Link } from 'react-router-dom'

import FlatironLogo from './FlatironLogo'
import './Navbar.css'
import SearchBar from './SearchBar'

const Navbar = ({ updateSearchTerm }) =>
  <div className='navbar'>
    <Link to='/'>
      <span className='navbar-title'>
        <FlatironLogo />
        <br />
        <b>Student Hub</b>
      </span>
    </Link>
    <div className='links'><Link to='/students'>Students</Link> | <Link to='/projects'>Projects</Link></div>
    <div className='navbar-searchbar'><SearchBar handleChange={updateSearchTerm} /></div>
  </div>

export default Navbar
