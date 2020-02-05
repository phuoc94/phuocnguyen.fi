import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ title, description, url, ImageData, info }) => (
  <div className="project">
    <h1 className="title">{title}</h1>
    <h1 className="info">{info}</h1>
    <Image fluid={ImageData} alt={title} />
    <p className="description">{description}</p>
    <p>
      <a href={url}>View this project online &rarr;</a>
    </p>
    <p>
      <Link to="/portfolio/">back to all projects</Link>
    </p>
  </div>
)

export default Project
