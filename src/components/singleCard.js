import React from "react"
import ReactCardFlipper from "react-card-flip"
import "./Card.css"
import styled from 'styled-components'
import { remainingResources } from '../utils/utils'

export const isBrowser = typeof window !== "undefined"

const Box = styled.div`
  width: 320px;
  height: 100%;
  border-radius: 26px;
  background: #102840;
  border: 3px solid #bc9060;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-family: "Roboto";
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: #bc9060;
  position: relative;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 40px;
    `

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      open: false,
      level: 1,
      maxLevel: 40,
      resources: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  minusLevel = (e) => {
    e.stopPropagation()
    const newLevel = this.state.level - 1;
    const resources = remainingResources(this.props.building, newLevel + 1, this.state.maxLevel);
    this.setState({ level: newLevel, resources });
  }

  addLevel = (e) => {
    e.stopPropagation()
    const newLevel = this.state.level + 1;
    const resources = remainingResources(this.props.building, newLevel + 1, this.state.maxLevel);
    this.setState({ level: newLevel, resources });
  }

  componentDidMount() {
    this.setState({ level: this.props.level, maxLevel: this.props.maxLevel, resources: this.props.resources });
  }


  render() {
    return isBrowser ? (
      <ReactCardFlipper height='280px' isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <Box className="card" key="front" onClick={this.handleClick} >
          <img src={this.props.image} alt={this.props.name} className="cardImage" />
          <div className="badge">{this.state.level}</div>
          <h3 className="buildingName">{this.props.name}</h3>
          <p className="resourcesLeft">{this.state.level < this.state.maxLevel
            ? `Resources left to lvl ${this.state.maxLevel}`
            : "Maxed Out Building"}</p>
          <div className="resources">
            {this.state.resources.map((resource, index) => {
              return resource.amount ? (
                <div key={index}>
                  <p className="resources">{resource.amount}</p>
                  <p className="resourceName">{resource.type}</p>
                </div>
              ) : null
            })}
          </div>
          <div className="levelup">
            <div className={this.state.level > 1 ? "levelupIconDiv" : "disabledLevelupIconDiv"}>
              <h1 className={this.state.level > 1 ? "minus" : "disabledMinus"} onClick={this.state.level > 1 ? this.minusLevel : null}>-</h1>
            </div>
            <p className="levelupText">Level {this.state.level}</p>
            <div className={this.state.level < this.state.maxLevel ? "levelupIconDiv" : "disabledLevelupIconDiv"}>
              <h1 className={this.state.level < this.state.maxLevel ? "plus" : "disabledPlus"} onClick={this.state.level < this.state.maxLevel ? this.addLevel : null}>+</h1>
            </div>
          </div>
        </Box>
        <Box className="card" key="back" onClick={this.handleClick}>
          <img src={this.props.image} alt={this.props.name} className="cardImage" />
          <div className="badge">{this.state.level}</div>
          <h3 className="buildingName">{this.props.name}</h3>
          <p className="resourcesLeft">Unlocks</p>
          <div className="resources">
            {this.props.unlocks.map((unlock, index) => (
              <div key={index}>
                <img src={unlock} className="resourcesBack" alt="unlocked" />
              </div>
            ))}
          </div>
        </Box>
      </ReactCardFlipper>
    ) : null
  }
}

export default Card
