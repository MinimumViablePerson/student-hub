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

  componentDidMount () {
    this.getProject()
  }

  render () {
    const { project } = this.state

    if (project) {
      const { title, screenshot, slug } = project
      return <div className='student-details'>
        <SharedElement sharedId={`name-for-${slug}`} startOnUnmount>
          {props => <h2 {...props}>{title}</h2>}
        </SharedElement>
        <SharedElement sharedId={`image-for-${slug}`} startOnUnmount>
          {props => <img src={screenshot} alt='' {...props} />}
        </SharedElement>
      </div>
    } else {
      return <div className='student-details'>
        Loading Project Details ...
      </div>
    }
  }
}

export default ProjectDetails
