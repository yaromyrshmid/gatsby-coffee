import React, { useState } from "react"
import { Link } from "gatsby"
import { FaCartArrowDown } from "react-icons/fa"
import { Navbar, Nav } from "react-bootstrap"

import logo from "../../images/logo.svg"

const Navigation = () => {
  const [links, setLinks] = useState([
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/about",
      text: "about",
    },
  ])

  return (
    <Navbar expand="sm" bg="light">
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} alt="logo" />
          {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/webalys */}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto mr-auto">
          {links.map(link => {
            return (
              <Link
                to={link.path}
                key={link.id}
                className="nav-link text-capitalize mt-2"
              >
                {link.text}
              </Link>
            )
          })}
          <Link to="/" className="nav-link ml-sm-5">
            <FaCartArrowDown className="snipcart-checkout cart-icon" />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
