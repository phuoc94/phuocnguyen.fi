import React from "react"
import Image from "gatsby-image"
import { Card } from "react-bootstrap"

const ProjectPreview = ({ slug, title, predesc, ImageData, tags, url }) => (
  <Card className="projectPreview">
    <a href={url}>
      <Image fluid={ImageData} alt={title} />
    </a>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{predesc}</Card.Text>
      <div className="tags">
        {tags.map(tag => {
          return (
            <a href={"tags/" + tag} key={tag} className={"tag " + tag}>
              {tag}
            </a>
          )
        })}
      </div>
    </Card.Body>
  </Card>
)

export default ProjectPreview
