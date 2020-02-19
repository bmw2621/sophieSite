import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Nav from "./Nav"

import fbIcon from "../images/facebookIcon.png"
import igIcon from "../images/instagramIcon.png"
import liIcon from "../images/linkedinIcon.png"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Nav />
        <main>{children}</main>
        <footer>
          <div style={{"padding":"10px"}}>
            <a href="https://www.facebook.com/sophiedaniellewinchester"><img alt="Facebook Icon" style={{"width":"3vw"}}src={fbIcon}></img></a>
            <a href="https://www.instagram.com/sophiedwinchester/?hl=en"><img alt="Instagram Icon" style={{"width":"3vw"}}src={igIcon}></img></a>
            <a href="https://www.linkedin.com/in/sophie-winchester-190a8312b"><img alt="LinkedIn Icon" style={{"width":"3vw"}}src={liIcon}></img></a>
          </div>
          <span>© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a></span>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
