import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../services/auth"
import { Link } from "gatsby"
import Profile from "../components/profile"
import Layout from "../components/layout"
// {
//   "sub": "auth0|5cabc1ad782bb20ecbc43bce",
//   "nickname": "test",
//   "name": "test@gmail.com",
//   "picture": "https://s.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
//   "updated_at": "2019-04-08T21:48:29.838Z",
//   "email": "test@gmail.com",
//   "email_verified": false
// }
const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

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
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Router>
        <Profile path="/profile/" />
      </Router>
    </Layout>
  )
}

export default Account
