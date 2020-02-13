import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/querys/seo"
import PortfolioPage from "./portfolio"
import { Link, useStaticQuery, graphql } from "gatsby"

const title = "Home"
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(ext: { eq: ".pdf" }) {
        publicURL
      }
    }
  `)
  return (
    <Layout pageTitle={title}>
      <SEO title={title} />
      <div className="home">
        <div className="f-page">
          <h1>PHUOC NGUYEN</h1>
          <p>FRONT-END DEVELOPER</p>
          <div className="buttons">
            <a href={data.file.publicURL}>View resume</a>
            <Link to="contact">Get In Touch</Link>
          </div>
        </div>
        <div className="f-about">
          <h3>little bit</h3>
          <h1>about me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            amet corrupti officia quia id aperiam, omnis eum pariatur autem
            voluptates maxime sint neque iusto hic corporis, cupiditate a minus.
            Tenetur.
          </p>
        </div>
        <div className="portfolio">
          <PortfolioPage />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
