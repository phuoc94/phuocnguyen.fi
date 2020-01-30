import React from "react"
import { Link } from "gatsby"
import "./css/main.css"

const Menu = ({ siteTitle }) => (
  <div className="nav-menu">
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio/">Portfolio</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
)
export default Menu
