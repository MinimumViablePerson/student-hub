import React from 'react'
import { Link } from 'react-router-dom'
import { SharedElement } from '@taito/react-sheltr'

const ProjectCard = ({ project: { title, screenshot, slug } }) =>
  <Link to={`/projects/${slug}`}>
    <div className='card project-card'>
      <SharedElement sharedId={`project-${slug}`}>
        {
          props =>
            <div {...props}>
              <h2>{title}</h2>
              <img src={screenshot} alt='' />
            </div>
        }
      </SharedElement>
    </div>
  </Link>

export default ProjectCard
