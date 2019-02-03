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

  componentDidMount () {
    this.getProjects()
  }

  render () {
    const { projects } = this.state
    return <div className='list project-list'>
      {
        projects.map(project =>
          <ProjectCard key={project.slug} project={project} />
        )
      }
    </div>
  }
}

export default ProjectList
