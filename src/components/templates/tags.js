import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import ProjectPreview from "../layouts/projects-preview"

export const query = graphql`
  query($slug: String!) {
    allProjectsJson(filter: { tags: { eq: $slug } }) {
      edges {
        node {
          predesc
          slug
          title
          url
          tags
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const TagsTemplate = ({ data }) => {
  const projects = data.allProjectsJson.edges
  console.log(projects[0])
  return (
    <Layout>
      <div className="projectsPreview">
        {projects.map(({ node: project }) => {
          const title = project.title
          const predesc = project.predesc
          const slug = project.slug
          const imageData = project.image.childImageSharp.fluid
          const tags = project.tags
          return (
            <ProjectPreview
              title={title}
              predesc={predesc}
              slug={"project/" + slug}
              ImageData={imageData}
              tags={tags}
              key={slug}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default TagsTemplate
