import React, { Component } from 'react'

import SearchBar from './SearchBar'
import StudentCard from './StudentCard'

import API from '../adapters/API'

class StudentList extends Component {
  state = {
    students: [],
    searchTerm: ''
  }

  async getStudents () {
    const students = await API.getAllStudents()
    this.setState({ students })
  }

  get matchedStudents () {
    const { students, searchTerm } = this.state
    return students.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm })
  }

  componentDidMount () {
    this.getStudents()
  }

  render () {
    const { updateSearchTerm, matchedStudents } = this
    return <div className='list student-list'>
      <SearchBar handleChange={updateSearchTerm} />
      {
        matchedStudents.map(student =>
          <StudentCard key={student.slug} student={student} />
        )
      }
    </div>
  }
}

export default StudentList
