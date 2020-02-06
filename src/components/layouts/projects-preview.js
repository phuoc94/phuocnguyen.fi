import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectPreview = ({ slug, title, predesc, ImageData, tags }) => (
  <div className="projectPreview">
    <Link to={`/${slug}/`}>
      <div>
        <h2>{title}</h2>
        <Image fluid={ImageData} alt={title} />
        <p>{predesc}</p>
      </div>
    </Link>
    <div className="tags">
      {tags.map(tag => {
        return (
          <Link to={"tags/" + tag} className={"tag " + tag}>
            {tag}
          </Link>
        )
      })}
    </div>
  </div>
)

export default ProjectPreview
