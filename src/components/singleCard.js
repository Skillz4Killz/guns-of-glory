import React from "react"
import "./Card.css"
import { Link } from "gatsby"
import AcademyImage from "../images/academy.png"
import Minus from "../images/minus.png"
import Plus from "../images/plus.png"

const imageAssets = {
  academy: AcademyImage,
  minus: Minus,
  plus: Plus,
}

const Card = props => (
  <div className="card">
    <img
      src={imageAssets[props.name.toLowerCase()]}
      alt={props.text}
      className="cardImage"
    />
    <span className="cornerLevel">{props.level}</span>
    <h3 className="buildingName">{props.name}</h3>
    <p className="resourcesLeft">{props.text}</p>
    <div className="resources">
      {props.resources.map((resource, index) => (
        <div key={index}>
          <p className="resources">{resource.amount}</p>
          <span className="resourceName">{resource.type}</span>
        </div>
      ))}
    </div>
    <div className="levelup">
      <a>
        <img src={Minus} alt="minus" className="levelupButton" />
      </a>
      <p className="levelupText">Level {props.level}</p>
      <a>
        <img src={Plus} alt="plus" className="levelupButton" />
      </a>
    </div>
  </div>
)

export default Card
