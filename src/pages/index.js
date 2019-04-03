import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Building from "../components/building"

import academy from "../constants/buildings/academy"
import barracks from "../constants/buildings/barracks"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Building building={academy} name="Academy" />
    <Building building={barracks} name="Barracks" />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
