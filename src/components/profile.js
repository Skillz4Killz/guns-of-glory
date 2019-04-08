import React from "react"
import Tracker from "../components/tracker"

import academy from "../constants/buildings/academy"
const Profile = () => (
  <div>
    <h1>Your profile</h1>
    <ul>
      <li>Name: </li>
      <li>E-mail:</li>
    </ul>

    <Tracker building={academy} />
  </div>
)

export default Profile
