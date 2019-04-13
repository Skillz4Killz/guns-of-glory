import React from "react"
import "./Card.css"
// import { Link } from "gatsby"

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
      <h1 className="minus">-</h1>
      <p className="levelupText">Level {props.level}</p>
      <h1 className="plus">+</h1>
    </div>
  </div>
)

export default Card
