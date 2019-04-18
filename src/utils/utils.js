import FoodImage from "../images/food.png"
import IronImage from "../images/iron.png"
import SilverImage from "../images/silver.png"
import WoodImage from "../images/wood.png"

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
