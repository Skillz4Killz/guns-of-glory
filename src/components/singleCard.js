import React from "react"
import "./Card.css"
// import { Link } from "gatsby"

import Minus from "../images/minus.png"
import Plus from "../images/plus.png"

const Card = props => (
  <div className="card">
    <img src={props.image} alt={props.text} className="cardImage" />
    <div className="badge">{props.level}</div>
    <h3 className="buildingName">{props.name}</h3>
    <p className="resourcesLeft">{props.text}</p>
    <div className="resources">
      {props.resources.map((resource, index) => {
        return resource.amount ? (
          <div key={index}>
            <p className="resources">{resource.amount}</p>
            <span className="resourceName">{resource.type}</span>
          </div>
        ) : null
      })}
    </div>
    <div className="levelup">
      <a href="https://google.com">
        <img src={Minus} alt="minus" className="levelupButton" />
      </a>
      <p className="levelupText">Level {props.level}</p>
      <a href="https://google.com">
        <img src={Plus} alt="plus" className="levelupButton" />
      </a>
    </div>
  </div>
)

export default Card
