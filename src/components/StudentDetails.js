import React, { Component } from 'react'

import API from '../adapters/API'
import './StudentDetails.css'
import { SharedElement } from '@taito/react-sheltr';

class StudentDetails extends Component {
  state = {
    student: null
  }

  async getStudent () {
    const { slug } = this.props.match.params
    const student = await API.getStudent(slug)
    this.setState({ student })
  }

  componentDidMount () {
    this.getStudent()
  }

  render () {
    const { student } = this.state

    if (student) {
      const { name, avatar, slug } = student
      return <SharedElement sharedId={`student-${slug}`} startOnUnmount>
        {
          props =>
            <div className='student-details' {...props}>
              <h2>{name}</h2>
              <img src={avatar} alt='' />
            </div>
        }
      </SharedElement>
    } else {
      return <div className='student-details'>
        Loading Student Details ...
      </div>
    }
  }
}

export default StudentDetails
