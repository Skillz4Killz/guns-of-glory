import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TextLogo from "../images/gunsofglory.png"
import { logout, getProfile } from "../services/auth"
import "./header.css"

const Header = ({ siteTitle }) => {
  const user = getProfile()
  console.log(user)
  return (
    <header className="header">
      <div className="navDiv">
        <img src={TextLogo} alt="game logo" className="gameLogo" />
        <div className="rightSideNav">
          {user ? (
            <Link to="/profile" className="rightSideNav">
              {user.name}
            </Link>
          ) : null}{" "}
          {user ? (
            <a
              className="rightSideNav"
              href="#logout"
              onClick={e => {
                logout()
                e.preventDefault()
              }}
            >
              Logout
            </a>
          ) : (
            <Link to="/profile/" className="rightSideNav">
              Login
            </Link>
          )}
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
