import FoodImage from "../images/food.png"
import IronImage from "../images/iron.png"
import SilverImage from "../images/silver.png"
import WoodImage from "../images/wood.png"

import BuildingConstants from "../constants/buildings/index"

export const amountToString = (amount, type) => {
	if (type === 'time') return `${Math.floor(amount / 60 / 60 / 24)}d ${Math.floor(amount / 60 / 60 % 24)}m`
	return amount > 1000000 ? `${parseFloat((amount / 1000000).toFixed(2))}M` : amount > 1000 ? `${parseFloat((amount / 1000).toFixed(2))}K` : amount
}

export const remainingResources = (building, newLevel, maxLevel) => {
	const levels = [];

	for (let i = newLevel; i <= maxLevel; i++) {
		levels.push(building[`level_${i}`]);
	}

	const resources = levels.map(level => level.resources)

	const neededResource = {
		food: 0,
		wood: 0,
		iron: 0,
		silver: 0
	};

	for (const resource of resources) {
		neededResource.food = neededResource.food + resource.food;
		neededResource.wood = neededResource.wood + resource.wood;
		neededResource.iron = neededResource.iron + resource.iron;
		neededResource.silver = neededResource.silver + resource.silver;
	}

	return [
		{ type: "Food", image: FoodImage, amount: neededResource.food > 1000000 ? `${parseFloat((neededResource.food / 1000000).toFixed(2))}M` : neededResource.food > 1000 ? `${parseFloat((neededResource.food / 1000).toFixed(2))}K` : neededResource.food },
		{ type: "Wood", image: WoodImage, amount: neededResource.wood > 1000000 ? `${parseFloat((neededResource.wood / 1000000).toFixed(2))}M` : neededResource.wood > 1000 ? `${parseFloat((neededResource.wood / 1000).toFixed(2))}K` : neededResource.wood },
		{ type: "Iron", image: IronImage, amount: neededResource.iron > 1000000 ? `${parseFloat((neededResource.iron / 1000000).toFixed(2))}M` : neededResource.iron > 1000 ? `${parseFloat((neededResource.iron / 1000).toFixed(2))}K` : neededResource.iron },
		{ type: "Silver", image: SilverImage, amount: neededResource.silver > 1000000 ? `${parseFloat((neededResource.silver / 1000000).toFixed(2))}M` : neededResource.silver > 1000 ? `${parseFloat((neededResource.silver / 1000).toFixed(2))}K` : neededResource.silver },
	]
}

export const singleResourceValue = (building, newLevel, maxLevel) => {
	const levels = [];

	for (let i = newLevel; i <= maxLevel; i++) {
		levels.push(building[`level_${i}`]);
	}

	const resources = levels.map(level => level.resources)

	let totalResources = 0;

	for (const resource of resources) totalResources += resource.food + (resource.wood * 2) + (resource.iron * 3) + (resource.silver * 4)

	return totalResources
}

export const resourceAnalytics = (buildings) => {
	const totalSpent = {
		food: 0,
		wood: 0,
		iron: 0,
		silver: 0,
		seconds: 0
	}

	const totalRemaining = {
		food: 0,
		wood: 0,
		iron: 0,
		silver: 0,
		seconds: 0,
	}

	for (const building of buildings) {
		const buildingName = building.name
			.split(" ")
			.join("")
			.toLowerCase()
		const buildingDetails = BuildingConstants[buildingName]
		for (const levelObj of Object.keys(buildingDetails)) {
			if (!levelObj.startsWith("level_")) continue;
			for (const buildingLevel of building.levels) {
				const levelData = buildingDetails[levelObj];
				if (levelData.level > buildingLevel) {
					totalRemaining.food += levelData.resources.food;
					totalRemaining.wood += levelData.resources.wood;
					totalRemaining.iron += levelData.resources.iron;
					totalRemaining.silver += levelData.resources.silver;
					totalRemaining.seconds += levelData.time.seconds
				} else {
					totalSpent.food += levelData.resources.food;
					totalSpent.wood += levelData.resources.wood;
					totalSpent.iron += levelData.resources.iron;
					totalSpent.silver += levelData.resources.silver;
					totalSpent.seconds += levelData.time.seconds
				}
			}
		}

		return {
			spent: {
				food: amountToString(totalSpent.food),
				wood: amountToString(totalSpent.wood),
				iron: amountToString(totalSpent.iron),
				silver: amountToString(totalSpent.silver),
				seconds: amountToString(totalSpent.seconds, 'time')
			},
			left: {
				food: amountToString(totalRemaining.food),
				wood: amountToString(totalRemaining.wood),
				iron: amountToString(totalRemaining.iron),
				silver: amountToString(totalRemaining.silver),
				seconds: amountToString(totalRemaining.seconds, 'time')
			}
		}
	}
}
