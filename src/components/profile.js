import React from "react"
import { getUser } from "../services/auth"
import Tracker from "../components/tracker"
import StickyFooter from 'react-sticky-footer'

import academy from "../constants/buildings/academy"
const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {getUser().name}</li>
      <li>E-mail: {getUser().email}</li>
    </ul>

    <Tracker building={academy} />
    <footer
      className="footer"
      bottomThreshold={50}
      style={{
        backgroundColor: '#050E19',
        padding: '1rem',
        fontSize: '14px',
        fontFamily:'Helvetica',
        color: 'white',
        textAlign: 'center',
        bottom: '0px',
        position: 'fixed',
        width: '100%'
      }}
    >
      <p>© {new Date().getFullYear()}, Copyright GoGHub</p>
      <p>
        GoGHub is not affiliated or part of Guns of Glory. All Guns of
        Glory copyrights and art assets belong to Guns of Glory.
            </p>
      Made by <a href="https://discord.gg/rWMuMdk">Skillz4Killz</a> and
            {"  "}
      <a href="https://twitter.com/AngeloCant1">AngeloC</a>
    </footer>
  </>
)

export default Profile
