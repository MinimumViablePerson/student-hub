import React from 'react'
import { Link } from 'react-router-dom'

import './HomePage.css'

const HomePage = props =>
  <div className='homepage'>
    <h2>Welcome to Flatiron's Student Hub!</h2>
    <p>Go to: <Link to='/students'>Students</Link> | <Link to='/projects'>Projects</Link></p>
  </div>

export default HomePage
