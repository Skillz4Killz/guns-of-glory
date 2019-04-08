import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../services/auth"
import { Link } from "gatsby"
import Profile from "../components/profile"
import Layout from "../components/layout"

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()
  if (user) console.log("Success!")
  return (
    <Layout>
      <nav>
        <Link to="/account/">Home</Link>{" "}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <Router>
        <Profile path="/profile/" />
      </Router>
    </Layout>
  )
}

export default Account
