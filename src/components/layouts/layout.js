import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "../templates/nav-bar"
import "../css/layout.css"

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Menu siteTitle={data.site.siteMetadata.title} />
      <main className="main">{children}</main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Phuoc Nguyen</p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
