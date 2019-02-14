import React, { PureComponent } from 'react'

import StudentCard from './StudentCard'
import API from '../adapters/API'

class StudentList extends PureComponent {
  state = {
    students: []
  }

  async getStudents () {
    const students = await API.getAllStudents()
    this.setState({ students })
  }

  get matchedStudents () {
    const { students } = this.state
    const { searchTerm } = this.props
    return students.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  componentDidMount () {
    this.getStudents()
  }

  render () {
    const { matchedStudents } = this

    if (matchedStudents.length === 0) {
      return <h3>No students matched your current search.</h3>
    }

    return <div className='list student-list'>
      {
        matchedStudents.map(student =>
          <StudentCard key={student.slug} student={student} />
        )
      }
    </div>
  }
}

export default StudentList
