import React from 'react'
import { Link } from 'react-router-dom'
import { SharedElement } from '@taito/react-sheltr'

const ProjectCard = ({ project: { title, screenshot, slug } }) =>
  <Link to={`/projects/${slug}`}>
    <div className='card project-card'>
      <SharedElement sharedId={`name-for-${slug}`}>
        {props => <h2 {...props}>{title}</h2>}
      </SharedElement>
      <SharedElement sharedId={`image-for-${slug}`}>
        {props => <img src={screenshot} alt='' {...props} />}
      </SharedElement>
    </div>
  </Link>

export default ProjectCard
