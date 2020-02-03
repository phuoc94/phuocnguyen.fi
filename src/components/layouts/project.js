import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ title, description, url, ImageData }) => (
  <div className="project">
    <h1>{title}</h1>
    <Image fluid={ImageData} alt={title} />
    <p>{description}</p>
    <p>
      <a href={url}>View this project online &rarr;</a>
    </p>
    <p>
      <Link to="/portfolio/">back to all projects</Link>
    </p>
  </div>
)

export default Project
