import React from 'react'
import Link from 'gatsby-link'
import { Card } from './StyledComponents'


const ProjectListing = ({ project }) =>
  <Card>
    <h3>
      <Link
        style={{textDecoration: 'none'}}
        to={project.fields.slug}
      >
        {project.frontmatter.title}
      </Link>
    </h3>
    <span>{project.frontmatter.date}</span>
    <p>{project.excerpt}</p>
  </Card>

export default ProjectListing;
