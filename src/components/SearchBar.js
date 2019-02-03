import React from 'react'

import magnifyingGlass from '../images/magnifying-glass.png'
import './SearchBar.css'

const SearchBar = ({ handleChange }) =>
  <div className='search-bar'>
    <div className='search-bar-container'>
      <input onChange={event => handleChange(event.target.value)} />
      <span className='icon'><img className='search-bar-icon' src={magnifyingGlass} alt='magnifying glass' /></span>
    </div>
  </div>

export default SearchBar
