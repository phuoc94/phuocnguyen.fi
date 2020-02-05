import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import Project from "../layouts/project"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      info
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson

  return (
    <Layout>
      <Project
        title={project.title}
        description={project.description}
        url={project.url}
        info={project.info}
        ImageData={project.image.childImageSharp.fluid}
      />
    </Layout>
  )
}

export default ProjectTemplate
