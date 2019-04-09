import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TextLogo from "../images/gunsofglory.png"
import { getProfile } from "../services/auth"
import "./header.css"

const Header = ({ siteTitle }) => {
  const user = getProfile()
  console.log(user)
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div className="navDiv">
        <img src={TextLogo} alt="game logo" className="gameLogo" />
        <div className="rightSideNav">
          <Link to="/profile" className="rightSideNav">
            {user ? user.name : "Profile"}
          </Link>{" "}
          {user ? (
            <Link to="/logout" className="rightSideNav">
              Logout
            </Link>
          ) : (
            <Link to="/login" className="rightSideNav">
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
