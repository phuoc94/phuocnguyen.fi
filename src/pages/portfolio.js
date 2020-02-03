import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/querys/seo"
import ProjectPreview from "../components/layouts/projects-preview"

const title = "My Projects"
const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            descriprion
            slug
            title
            url
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
  `)

  const projects = data.allProjectsJson.edges
  return (
    <Layout pageTitle={title}>
      <SEO title={title} />
      <h1>{title}</h1>
      <div className="projectsPreview">
        {projects.map(({ node: project }) => {
          const title = project.title
          const description = project.description
          const slug = project.slug
          const imageData = project.image.childImageSharp.fluid
          return (
            <ProjectPreview
              title={title}
              description={description}
              slug={slug}
              ImageData={imageData}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default PortfolioPage
