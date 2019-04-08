import React from "react"
import { getUser } from "../services/auth"
import Tracker from "../components/tracker"

import academy from "../constants/buildings/academy"
const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {getUser().name}</li>
      <li>E-mail: {getUser().email}</li>
    </ul>

    <Tracker building={academy} />
  </>
)

export default Profile
