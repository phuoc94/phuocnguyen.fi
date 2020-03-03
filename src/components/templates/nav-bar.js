import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import "../css/main.css"
import logo from "../../images/logo.svg"

const Menu = ({ siteTitle }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <div className="container">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="75"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio/">Portfolio</Nav.Link>
            <Nav.Link href="/about/">About</Nav.Link>
            <Nav.Link href="/contact/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
export default Menu
