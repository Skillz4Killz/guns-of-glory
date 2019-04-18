import React from "react"
import ReactCardFlipper from "react-card-flip"
import "./Card.css"
import styled from 'styled-components'

const Box = styled.div`
width: 320px;
  height: 390px;
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
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  minusLevel = (e) => {
    e.stopPropagation()
    this.setState({ level: this.state.level - 1 });
  }

  addLevel = (e) => {
    e.stopPropagation()
    this.setState({ level: this.state.level + 1 });
  }

  componentDidMount() {
    this.setState({ level: this.props.level, maxLevel: this.props.maxLevel });
  }


  render() {
    return this.props.name === 'Castle' || this.state.level < this.state.maxLevel ? (
      <ReactCardFlipper height='280px' isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <Box className="card" key="front" onClick={this.handleClick} >
          <img src={this.props.image} alt={this.props.text} className="cardImage" />
          <div className="badge">{this.state.level}</div>
          <h3 className="buildingName">{this.props.name}</h3>
          <p className="resourcesLeft">{this.state.level < this.state.maxLevel
            ? `Resources left to lvl ${this.state.maxLevel}`
            : "Maxed Out Building"}</p>
          <div className="resources">
            {this.props.resources.map((resource, index) => {
              return resource.amount ? (
                <div key={index}>
                  <p className="resources">{resource.amount}</p>
                  <p className="resourceName">{resource.type}</p>
                </div>
              ) : null
            })}
          </div>
          <div className="levelup">
            <div className="levelupIconDiv">
              <h1 className="minus" onClick={this.minusLevel}>-</h1>
            </div>
            <p className="levelupText">Level {this.state.level}</p>
            <div className="levelupIconDiv">
              <h1 className="plus" onClick={this.addLevel}>+</h1>
            </div>
          </div>
        </Box>
        <Box className="card" key="back" onClick={this.handleClick}>
          <img src={this.props.image} alt={this.props.text} className="cardImage" />
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
