import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { Card, Button } from "react-bootstrap"

const ProjectPreview = ({ slug, title, predesc, ImageData, tags }) => (
  <Card className="projectPreview">
    <Image fluid={ImageData} alt={title} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{predesc}</Card.Text>
      <div className="tags">
        {tags.map(tag => {
          return (
            <Link to={"tags/" + tag} className={"tag " + tag}>
              {tag}
            </Link>
          )
        })}
      </div>
    </Card.Body>
  </Card>
)

export default ProjectPreview
