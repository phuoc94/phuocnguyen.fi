import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/querys/seo"
import ProjectPreview from "../components/layouts/projects-preview"

const title = "Portfolio"
const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
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
  `)

  const projects = data.allProjectsJson.edges
  return (
    <Layout pageTitle={title}>
      <div className="container">
        <SEO title={title} />
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          {title}
        </h2>

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
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage
