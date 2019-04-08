/* eslint react/no-multi-comp: 0, max-len: 0 */
import "rc-slider/assets/index.css"

import React from "react"
import Slider, { createSliderWithTooltip } from "rc-slider"

import SingleCard from "./singleCard"

const levelFormatter = v => `Level ${v}`

const SliderWithTooltip = createSliderWithTooltip(Slider)
const resourceTypes = ["food", "wood", "iron", "silver", "badges"]

export default class CustomizedSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 18,
    }
  }
  onSliderChange = value => {
    this.setState({
      value,
    })
  }

  makeAllNecessarySliders = levelKeys => {
    const sliders = []
    for (let i = 0; i < this.props.building.maxBuildingsAllowed; i++) {
      sliders.push(
        <SliderWithTooltip
          value={this.state.value}
          onChange={this.onSliderChange}
          dots
          max={levelKeys.length}
          tipFormatter={levelFormatter}
        />
      )
    }
    return sliders
  }

  render() {
    const levelKeys = Object.keys(this.props.building).filter(l =>
      l.startsWith("level_")
    )

    return (
      <div>
        <SingleCard
          image="https://cdn.discordapp.com/attachments/416884846611398667/562757696076382218/farm.jpg"
          name="Academy"
          text={`Resources left to lvl ${levelKeys.length}`}
          resources={[
            { type: "Food", amount: "5K" },
            { type: "Wood", amount: "110K" },
            { type: "Iron", amount: "90M" },
            { type: "Silver", amount: "10M" },
          ]}
          level={1}
          maxLevel={40}
        />
        {/*<img
          src="https://cdn.discordapp.com/attachments/416884846611398667/562757696076382218/farm.jpg"
          alt={this.props.building.name}
        />
        <h3>{this.props.building.name}</h3>
        {resourceTypes.map((type, index) => {
          const neededResource = levelKeys
            .slice(this.state.value)
            .map(
              key =>
                this.props.building[key].resources[type] *
                this.props.building.maxBuildingsAllowed
            )
            .reduce((prev, current) => prev + current)
          return neededResource ? (
            <p key={index}>
              {type}: {neededResource.toLocaleString()}
            </p>
          ) : null
        })}
        {this.props.building.maxBuildingsAllowed > 1 ? (
          this.makeAllNecessarySliders(levelKeys)
        ) : (
          <SliderWithTooltip
            value={this.state.value}
            onChange={this.onSliderChange}
            dots
            max={levelKeys.length}
            tipFormatter={levelFormatter}
          />
        )}*/}
      </div>
    )
  }
}
