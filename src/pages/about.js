import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/querys/seo"
import Image from "gatsby-image"

const title = "About me"
const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageTitle={title}>
      <div className="container">
        <SEO title={title} />
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            About Me
          </h2>

          <div className="row">
            <div className="col-md-6">
              <Image fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
            <div className="col-md-6">
              <p>
                Hello! my name is phuoc. I’am junior full stack developer who
                currently lives in Turku, Finland.
              </p>
              <p>Currently I'm looking for a job as developer.</p>
              <p>
                I'm really interested in Technology & solving technical
                problems.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage
