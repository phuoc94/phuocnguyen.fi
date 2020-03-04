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
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <small>Copyright © {new Date().getFullYear()} Phuoc Nguyen</small>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
