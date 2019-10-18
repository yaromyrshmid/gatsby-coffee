import React from "react"
import PropTypes from "prop-types"

import Navigation from "./Globals/Navbar"
import Footer from "./Globals/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
