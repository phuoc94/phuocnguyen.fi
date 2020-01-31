import React from "react"
import { Link } from "gatsby"
import image from "gatsby-image"

const ProjectPreview = ({ slug, title, description, ImageData }) => (
  <div className="project-preview">
    <Link to={`/${slug}/`}>
      <Image fluid={ImageData} alt={title} />
      <h2>
        <Link to={`/${slug}/`}>{title}</Link>
      </h2>
      <p>{description}</p>
      <p>
        <Link to={`/${slug}/`}>View this project</Link>
      </p>
    </Link>
  </div>
)

export default ProjectPreview
