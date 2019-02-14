import React, { Component } from 'react'

import ProjectCard from './ProjectCard'

import API from '../adapters/API'

class ProjectList extends Component {
  state = {
    projects: []
  }

  async getProjects () {
    const projects = await API.getAllProjects()
    this.setState({ projects })
  }

  get matchedProjects () {
    const { projects } = this.state
    const { searchTerm } = this.props
    return projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  componentDidMount () {
    this.getProjects()
  }

  render () {
    const { matchedProjects } = this

    if (matchedProjects.length === 0) {
      return <h3>No projects matched your current search.</h3>
    }

    return <div className='list project-list'>
      {
        matchedProjects.map(project =>
          <ProjectCard key={project.slug} project={project} />
        )
      }
    </div>
  }
}

export default ProjectList
