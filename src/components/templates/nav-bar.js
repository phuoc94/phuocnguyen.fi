import React from "react"
import { Link } from "gatsby"
import "../css/main.css"
import logo from "../../images/logo.svg"

const Menu = ({ siteTitle }) => {
  return (
    <div className="nav-bar">
      <nav className="nav-menu">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
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
}
export default Menu
