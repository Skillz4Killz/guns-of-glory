// import React, { Component } from 'react'
// import { Link } from 'gatsby'

// import Layout from '../components/layout'
// // import FetchingExample from '../containers/FetchingExample'
// import SignOut from '../containers/SignOut'

// import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
// import "react-tabs/style/react-tabs.css"
// // import { app } from "firebase"
// // import app from 'firebase/app'
// // import auth from 'firebase/auth'
// // import database from 'firebase/database'

// import Tracker from "../components/tracker"
// import Overview from "../components/overview"
// import ComingSoon from "../components/comingSoon"
// import getFirebase from '../firebase'
// import FirebaseContext from '../components/FirebaseContext'
// // import SignIn from '../containers/SignIn'

// import player from "../utils/mockdb/skillz"
// import '../components/Navbar.css'

// export default class IndexPage extends Component {
//   state = {
//     firebase: null,
//     authenticated: false,
//   }

//   componentDidMount() {
//     // const app = import('firebase/app')
//     const auth = import('firebase/auth')
//     const database = import('firebase/database')

//     Promise.all([app, auth, database]).then(values => {
//       const firebase = getFirebase(values[0])
//       this.setState({ firebase })

//       firebase.auth().onAuthStateChanged(user => {
//         if (!user) {
//           this.setState({ authenticated: false })
//         } else {
//           this.setState({ authenticated: true })
//         }
//       })
//     })
//   }

//   render() {
//     const { firebase, authenticated } = this.state

//     if (!firebase) return null
//     console.log(authenticated)
//     return (
//       <FirebaseContext.Provider value={firebase}>
//         {authenticated ? (null) : (<SignIn />)}
//       </FirebaseContext.Provider>
//     )
//   }
// }


import React from 'react'
import { Link } from 'gatsby'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

// import FetchingExample from '../containers/FetchingExample'
import SignOut from '../containers/SignOut'
import Layout from '../components/layout'
import Tracker from "../components/tracker"
import Overview from "../components/overview"
import ComingSoon from "../components/comingSoon"
import SEO from "../components/seo"
import '../components/Navbar.css'

import player from "../utils/mockdb/skillz"
import Analytics from "../components/analytics"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h1 style={{ color: 'white', fontSize: '24px', position: 'relative', marginTop: '32px', textAlign: 'center' }}>Your Profile Page</h1>
        <Analytics buildings={Object.values(player.buildings)}></Analytics>
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

    <footer
      className="footer"
      bottomthreshold={50}
      style={{
        bottom: '0',
        backgroundColor: "#050E19",
        padding: "1rem",
        fontSize: "14px",
        fontFamily: "Helvetica",
        color: "white",
        textAlign: "center",
        width: "100%",
      }}
    >
      <p>© {new Date().getFullYear()}, Copyright GoGHub</p>
      <p>
        GoGHub is not affiliated or part of Guns of Glory. All Guns of Glory
        copyrights and art assets belong to Guns of Glory.
          </p>
      Made by <a href="https://discord.gg/rWMuMdk">Skillz4Killz</a> and
          {"  "}
      <a href="https://twitter.com/AngeloCant1">AngeloC</a>
    </footer>
  </Layout>
)

export default IndexPage
