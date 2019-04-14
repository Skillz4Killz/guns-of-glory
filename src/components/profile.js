import React from "react"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

import Tracker from "../components/tracker"

import player from "../utils/mockdb/skillz"
import './Navbar.css'
// import player from "../utils/mockdb/ac1";

const Profile = () => {
  return (
    <div>
      <div className='banner'></div>
      <h1 style={{ color: 'white', fontSize: '24px', position: 'relative', marginTop:'32px', textAlign:'center'}}>Your Profile Page</h1>
      <Tabs>
        <TabList>
          <Tab>Inner</Tab>
          <Tab>Outer</Tab>
          <Tab>Army</Tab>
          <Tab>Guards</Tab>
        </TabList>
        <TabPanel>
          <Tracker player={player} category="inner" />
        </TabPanel>
        <TabPanel>
          <Tracker player={player} category="outer" />
        </TabPanel>
        <TabPanel>
          <p>Placeholder for player troops</p>
        </TabPanel>
        <TabPanel>
          <p>Placeholder for player guards</p>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Profile
