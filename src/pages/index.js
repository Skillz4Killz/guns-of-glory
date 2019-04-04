import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Building from "../components/building"
import Tracker from "../components/tracker"

import academy from "../constants/buildings/academy"
// import barracks from "../constants/buildings/barracks"
// import farm from "../constants/buildings/farm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Tracker building={academy} />
    {/* <Tracker building={barracks} />
    <Tracker building={farm} />

    <Building building={academy} name="Academy" />
    <Building building={barracks} name="Barracks" /> */}
  </Layout>
)

export default IndexPage
