import React from "react"
import "./tracker.css"

import SingleCard from "./singleCard"
import AcademyImage from "../images/academy.png"
import BuildingConstants from "../constants/buildings/index"
const resourceTypes = ["food", "wood", "iron", "silver", "badges"]

const imageAssets = {
  academy: AcademyImage,
  airshipdock: AcademyImage,
  artilleryfoundry: AcademyImage,
  barracks: AcademyImage,
  castle: AcademyImage,
  embassy: AcademyImage,
  farm: AcademyImage,
  forge: AcademyImage,
  hallofwar: AcademyImage,
  hospital: AcademyImage,
  ironmine: AcademyImage,
  lookouttower: AcademyImage,
  lumberyard: AcademyImage,
  militarytent: AcademyImage,
  munitionsexchange: AcademyImage,
  shootingrange: AcademyImage,
  silvermine: AcademyImage,
  stables: AcademyImage,
  tradestation: AcademyImage,
  trapfactory: AcademyImage,
  wall: AcademyImage,
  warehouse: AcademyImage,
}

export default props => {
  const buildings = Object.values(props.player.buildings)
  const castleBuilding = buildings.find(b => b.name.toLowerCase() === "castle")
  const currentCastleLevel = castleBuilding.levels[0]
  return (
    <div className="cardGrid">
      {buildings.map((building, index) => {
        const buildingName = building.name
          .split(" ")
          .join("")
          .toLowerCase()
        const buildingDetails = BuildingConstants[buildingName]

        const buildingLevels = Object.keys(buildingDetails).filter(l =>
          l.startsWith("level_")
        )

        const allowedLevels = buildingLevels.filter(l => {
          if (buildingDetails[l].level < building.levels[0]) return false
          const requirements = buildingDetails[l].required
          for (const requirement of requirements) {
            const currentRequiredBuildingLevel = buildings.find(
              b => b.name.toLowerCase() === requirement.name.toLowerCase()
            ).levels[0]
            if (currentRequiredBuildingLevel < requirement.level) return false
          }
          return true
        })
        // console.log(buildingName, allowedLevels)
        const neededResource = resourceTypes
          .map(type =>
            allowedLevels.length
              ? allowedLevels
                  .map(
                    key =>
                      buildingDetails[key].resources[type] *
                      building.levels.length
                  )
                  .reduce((prev, current) => prev + current)
              : 0
          )
          .map(value => {
            if (value > 1000000) return `${(value / 1000000).toFixed(2)}M`
            if (value > 1000) return `${(value / 1000).toFixed(2)}K`
            return value
          })

        return allowedLevels[allowedLevels.length - 1] ? (
          <SingleCard
            key={index}
            image={imageAssets[buildingName]}
            name={building.name}
            text={
              allowedLevels[allowedLevels.length - 1]
                ? `Resources left to lvl ${allowedLevels[
                    allowedLevels.length - 1
                  ].substring(6)}`
                : "Maxed Out Building"
            }
            resources={[
              { type: "Food", amount: neededResource[0] },
              { type: "Wood", amount: neededResource[1] },
              { type: "Iron", amount: neededResource[2] },
              { type: "Silver", amount: neededResource[3] },
            ]}
            level={building.levels[0]}
            maxLevel={buildingLevels.length}
          />
        ) : null
      })}

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
