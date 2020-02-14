import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/querys/seo"
import PortfolioPage from "./portfolio"
import { Link, useStaticQuery, graphql } from "gatsby"
import BgVideo from "../images/bgvideo.webm"

const title = "Home"
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(ext: { eq: ".pdf" }) {
        publicURL
      }
      placeholderImage: file(relativePath: { eq: "poster.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout pageTitle={title}>
      <SEO title={title} />
      <video
        loop
        autoPlay
        muted
        id="myVideo"
        poster={data.placeholderImage.childImageSharp.fluid}
      >
        <source src={BgVideo} type="video/webm" />
        <track kind="No Track" srcLang="en" />
      </video>
      <div className="mask"></div>
      <div className="home">
        <div className="f-page">
          <h1>I Build Amazing experiences</h1>
          <p>Web Developer From Turku, Finland</p>
          <div className="buttons">
            <a href={data.file.publicURL}>View resume</a>
            <Link to="contact">Get In Touch</Link>
          </div>
        </div>

        <div className="portfolio">
          <PortfolioPage />
        </div>
        <div className="f-about">
          <h3>little bit</h3>
          <h1>about me</h1>
          <p>
            Hello! my name is phuoc. I’am junior full stack developer who
            currently lives in Turku, Finland.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
