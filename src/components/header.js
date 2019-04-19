import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => {
  return (
    <header className="header">
      <div className="navDiv">
        <h1 className='gameLogo'>GoGHub</h1>
        <div className="rightSideNav">
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
