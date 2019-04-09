import React from "react"
import Tracker from "../components/tracker"

import player from "../utils/mockdb/skillz"
// import player from "../utils/mockdb/ac1";

const Profile = () => (
  <div>
    <h1>Your profile</h1>
    <ul>
      <li>Name: </li>
      <li>E-mail:</li>
    </ul>

    <Tracker player={player} />
  </div>
)

export default Profile
