import React from 'react'
import { resourceAnalytics } from "../utils/utils"
import FoodImage from "../images/food.png"
import IronImage from "../images/iron.png"
import SilverImage from "../images/silver.png"
import WoodImage from "../images/wood.png"

export default (props) => {
	const data = resourceAnalytics(props.buildings);
	const inlineStyle = {
		// position: 'relative',
		color: 'red'
	}
	return (
		<div style={inlineStyle}>
			<h1>Total Resources Remaining: Food {data.left.food} Wood {data.left.wood} Iron {data.left.iron} Silver {data.left.silver}</h1>
			<h1>Total Resources Spent: Food {data.spent.food} Wood {data.spent.wood} Iron {data.spent.iron} Silver {data.spent.silver}</h1>
		</div>
	)
}
