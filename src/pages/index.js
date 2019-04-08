import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import Profile from "../components/profile"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
    {isLoggedIn() ? (
      <Profile />
    ) : (
      <p>
        You should <Link to="/app/login">log in</Link> to see restricted content
      </p>
    )}
  </Layout>
)

export default IndexPage
