import React from "react"
import "./overview.css"

import SingleItem from "./singleItem"
import AcademyImage from "../images/academy.png"
import WarehouseImage from "../images/warehouse.png"
import ForgeImage from "../images/forge.png"
import MunitionsExchangeImage from "../images/munitionsexchange.png"
import EmbassyImage from "../images/embassy.png"
import HallOfWarImage from "../images/hallofwar.png"
import ArtilleryFoundryImage from "../images/artilleryfoundry.png"
import StablesImage from "../images/stables.png"
import ShootingRangeImage from "../images/shootingrange.png"
import AirshipDockImage from "../images/airshipdock.png"
import BarracksImage from "../images/barracks.png"
import FarmImage from "../images/farm.png"
import HospitalImage from "../images/hospital.png"
import LookoutTower from "../images/lookouttower.png"
import LumberyardImage from "../images/lumberyard.png"
import TradeStationImage from "../images/tradestation.png"
import WallImage from "../images/wall.png"
import CastleImage from "../images/castle.png"
import MilitaryTentImage from "../images/militarytent.png"
import IronMineImage from "../images/ironmine.png"
import TrapFactoryImage from "../images/trapfactory.png"
import SilverMineImage from "../images/silvermine.png"
import FoodImage from "../images/food.png"
import IronImage from "../images/iron.png"
import SilverImage from "../images/silver.png"
import WoodImage from "../images/wood.png"
import BombardiersImage from "../images/bombardiers.png"
import FirestarterImage from "../images/firestarters.png"
import HeavebombardiersImage from "../images/heavybombardiers.png"

import BuildingConstants from "../constants/buildings/index"
import { remainingResources, singleResourceValue } from "../utils/utils"
// const resourceTypes = ["food", "wood", "iron", "silver", "badges"]

const imageAssets = {
	academy: AcademyImage,
	airshipdock: AirshipDockImage,
	artilleryfoundry: ArtilleryFoundryImage,
	barracks: BarracksImage,
	castle: CastleImage,
	embassy: EmbassyImage,
	farm: FarmImage,
	forge: ForgeImage,
	hallofwar: HallOfWarImage,
	hospital: HospitalImage,
	ironmine: IronMineImage,
	lookouttower: LookoutTower,
	lumberyard: LumberyardImage,
	militarytent: MilitaryTentImage,
	munitionsexchange: MunitionsExchangeImage,
	shootingrange: ShootingRangeImage,
	silvermine: SilverMineImage,
	stables: StablesImage,
	tradestation: TradeStationImage,
	trapfactory: TrapFactoryImage,
	wall: WallImage,
	warehouse: WarehouseImage,
	food: FoodImage,
	wood: WoodImage,
	iron: IronImage,
	silver: SilverImage,
	bombardiers: BombardiersImage,
	firestarters: FirestarterImage,
	heavybombardiers: HeavebombardiersImage
}

export default props => {
	const buildings = Object.values(props.player.buildings)
	const totalResourceValues = []

	for (const building of buildings) {
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

		if (!allowedLevels[allowedLevels.length - 1]) continue;

		const maxLevel = allowedLevels[allowedLevels.length - 1].substring(6);
		for (const level of building.levels) {
			for (let i = level; i <= maxLevel; i++) {
				const remainingAmount = singleResourceValue(buildingDetails, i, i);
				totalResourceValues.push({ level: i, amount: remainingAmount, buildingName, name: building.name, details: buildingDetails, maxLevel })
			}
		}
	}

	const sortedValues = totalResourceValues.sort((a, b) => a.amount - b.amount).slice(0, 8)
	console.log(sortedValues)

	return (
		<div>
			<h1 style={{ position: 'relative', color: 'white', fontSize: '24px', marginTop: '32px', textAlign: 'center'}}>Recommended Upgrades</h1>
			<div className="itemGrid">
				{sortedValues.map((value, index) => (
					<SingleItem
						key={`${index}`}
						building={value.details}
						image={imageAssets[value.buildingName]}
						name={value.name}
						resources={remainingResources(value.details, value.level, value.level)}
						level={value.level}
						maxLevel={value.maxLevel}
					/>
				))}
			</div>
		</div>
	)
}
