import React from "react"
/*import { Link } from "gatsby"*/

import Layout from "../components/layouts/layout"
import SEO from "../components/querys/seo"
import Jumpo from "../components/layouts/jumpo"

const title = "About"
const PortfolioPage = () => (
  <Layout>
    <Jumpo pageTitle={title} />
    <SEO title={title} />
    <h1>Hi from {title} page</h1>
  </Layout>
)

export default PortfolioPage
