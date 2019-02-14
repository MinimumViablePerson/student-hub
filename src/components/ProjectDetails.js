import React, { Component } from 'react'
import { SharedElement } from '@taito/react-sheltr'

import API from '../adapters/API'
import './ProjectDetails.css'

class ProjectDetails extends Component {
  state = {
    project: null
  }

  async getProject () {
    const { slug } = this.props.match.params
    const project = await API.getProject(slug)
    this.setState({ project })
  }

  componentDidCatch (error) {
    console.log(error)
  }

  componentDidMount () {
    this.getProject()
  }

  render () {
    const { project } = this.state
    if (project) {
      const { title, screenshot, slug } = project
      return <SharedElement sharedId={`project-${slug}`}>
        {
          props =>
            <div className='student-details' {...props}>
              <h2>{title}</h2>
              <img src={screenshot} alt='' />
            </div>
        }
      </SharedElement>
    } else {
      return <div className='student-details'>
        Loading Project Details ...
      </div>
    }
  }
}

export default ProjectDetails
