import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { logout, getProfile } from "../services/auth"
import "./header.css"

const Header = ({ siteTitle }) => {
  const user = getProfile()
  console.log(user)
  return (
    <header className="header">
      <div className="navDiv">
        <h1 className='gameLogo'>GoGHub</h1>
        <div className="rightSideNav">
          {user ? (
            <Link to="/profile" className="rightSideNav" style={{ fontSize: '12px', marginRight:'16px'}}>
              {user.name}
            </Link>
          ) : null}{" "}
          {user ? (
            <a
              className="rightSideNav"
              href="#logout"
              style={{
                fontSize: '12px', marginRight: '16px'
              }}
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
