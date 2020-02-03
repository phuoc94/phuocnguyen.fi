import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/querys/seo"

const title = "About me"
const AboutPage = () => (
  <Layout pageTitle={title}>
    <SEO title={title} />
    <h1>{title}</h1>
  </Layout>
)

export default AboutPage
