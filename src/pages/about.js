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
          fluid(maxWidth: 160) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageTitle={title}>
      <SEO title={title} />
      <div className="about">
        <h1>{title}</h1>
        <div className="left">
          <p>
            Hello! my name is phuoc. I’am junior full stack developer who
            currently lives in Turku, Finland.
          </p>
          <p>Currently I'm looking for a job as developer.</p>
          <p>
            I'm really interested in Technology & solving technical problems.
          </p>
        </div>
        <div className="right">
          {" "}
          <Image fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
