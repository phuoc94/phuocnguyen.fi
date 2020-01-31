import React from "react"
/*import { Link } from "gatsby"*/

import Layout from "../components/layouts/layout"
/*import Image from "../components/image"*/
import SEO from "../components/querys/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi from Home page</h1>
  </Layout>
)

export default IndexPage
