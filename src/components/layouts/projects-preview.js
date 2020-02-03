import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectPreview = ({ slug, title, description, ImageData }) => (
  <div className="projectPreview">
    <Link to={`/${slug}/`}>
      <Image fluid={ImageData} alt={title} />
    </Link>

    <h2>
      <Link to={`/${slug}/`}>{title}</Link>
    </h2>
    <p>{description}</p>
    <p>
      <Link to={`/${slug}/`}>View this project</Link>
    </p>
  </div>
)

export default ProjectPreview
