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
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };


  render() {
    return (
      <ReactCardFlipper height='280px' isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <Box className="card" key="front" onClick={this.handleClick} >
          <img src={this.props.image} alt={this.props.text} className="cardImage" />
          <div className="badge">{this.props.level}</div>
          <h3 className="buildingName">{this.props.name}</h3>
          <p className="resourcesLeft">{this.props.text}</p>
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
              <h1 className="minus">-</h1>
            </div>
            <p className="levelupText">Level {this.props.level}</p>
            <div className="levelupIconDiv">
              <h1 className="plus">+</h1>
            </div>
          </div>
        </Box>
        <Box className="card" key="back" onClick={this.handleClick}>
          <div className="levelup">
            <div className="levelupIconDiv">
              <h1 className="minus">-</h1>
            </div>
            <p className="levelupText">Level {this.props.level}</p>
            <div className="levelupIconDiv">
              <h1 className="plus">+</h1>
            </div>
          </div>
        </Box>
      </ReactCardFlipper>
    )
  }
}

export default Card
