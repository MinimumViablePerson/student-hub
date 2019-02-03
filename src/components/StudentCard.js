import React from 'react'
import { Link } from 'react-router-dom'
import FlatironSymbol from './FlatironSymbol'
import { SharedElement } from '@taito/react-sheltr'

const StudentCard = ({ student: { name, avatar, slug } }) =>
  <Link to={`/students/${slug}`}>
    <div className='card student-card'>
      <SharedElement sharedId={`student-${slug}`}>
        {
          props =>
            <div {...props}>
              <h3><FlatironSymbol />{name}</h3>
              <img src={avatar} alt='' />
            </div>
        }
      </SharedElement>
    </div>
  </Link>

export default StudentCard
