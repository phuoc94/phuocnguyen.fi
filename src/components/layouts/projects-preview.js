import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectPreview = ({ slug, title, predesc, ImageData, tags }) => (
  <Link to={`/${slug}/`}>
    <div className="projectPreview">
      <h2>{title}</h2>
      <Image fluid={ImageData} alt={title} />
      <p>{predesc}</p>
      <div className="tags">
        {tags.map(tag => {
          return (
            <a href={tag} className="tag">
              {tag}
            </a>
          )
        })}
      </div>
    </div>
  </Link>
)

export default ProjectPreview
