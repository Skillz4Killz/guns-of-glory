import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <div className='banner'></div>
      <h1 style={{ color: 'white', fontSize: '24px', position: 'relative', marginTop: '32px', textAlign: 'center' }}>Your Profile Page</h1>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Inner</Tab>
          <Tab>Outer</Tab>
          <Tab>Army</Tab>
          <Tab>Guards</Tab>
        </TabList>
        <TabPanel>
          <Overview player={player} />
        </TabPanel>
        <TabPanel>
          <Tracker player={player} category="inner" />
        </TabPanel>
        <TabPanel>
          <Tracker player={player} category="outer" />
        </TabPanel>
        <TabPanel>
          <ComingSoon />
        </TabPanel>
        <TabPanel>
          <ComingSoon />
        </TabPanel>
      </Tabs>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <SignOut />
  </Layout>
)

export default IndexPage
