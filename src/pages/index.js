import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import FetchingExample from '../components/FetchingExample'
import SignOut from '../components/SignOut'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/profile/">Login to to your account</Link>
    <p>
      See example data fetcehed from firebase: in{' '}
      <code>FetchingExample.js</code>
    </p>
    <Link to="/page-2/">Go to page 2</Link>
    <SignOut />
  </Layout>
)

export default IndexPage
