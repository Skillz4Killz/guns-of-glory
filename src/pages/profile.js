import React, { Component } from "react"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile } from "../services/auth"
// import { Link } from "gatsby"
import Profile from "../components/profile"
import Layout from "../components/layout"
// import * as fetch from "node-fetch"

export default class OfficialPage extends Component {
  constructor(props) {
    super(props)
    this.state = { userData: null }
  }

  async componentDidMount() {
    // if (officialNews.length) return this.setState({ news: officialNews })
    const user = getProfile()
    if (user) console.log("Success!", user)

    // this.setState({ news: officialNews })
  }

  render() {
    if (!isAuthenticated()) {
      login()
      return <p>Redirecting to login...</p>
    }

    return (
      <Layout>
        <Router>
          <Profile path="/profile/" />
        </Router>
      </Layout>
    )
  }
}
