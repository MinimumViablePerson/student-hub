import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import StudentList from './components/StudentList'
import StudentDetails from './components/StudentDetails'
import ProjectList from './components/ProjectList'
import ProjectDetails from './components/ProjectDetails'
import './App.css'
class App extends Component {
  state = {
    searchTerm: ''
  }

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm })
  }

  render () {
    const { updateSearchTerm } = this
    const { searchTerm } = this.state
    return (
      <div className='app'>
        <Navbar updateSearchTerm={updateSearchTerm} />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/students' render={props => <StudentList {...props} searchTerm={searchTerm} />} />
            <Route path='/students/:slug' component={StudentDetails} />
            <Route exact path='/projects' render={props => <ProjectList {...props} searchTerm={searchTerm} />} />
            <Route path='/projects/:slug' component={ProjectDetails} />
            <Route component={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
