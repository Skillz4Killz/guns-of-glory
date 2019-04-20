import React from 'react'
import { resourceAnalytics } from "../utils/utils"
import FoodImage from "../images/food.png"
import IronImage from "../images/iron.png"
import SilverImage from "../images/silver.png"
import WoodImage from "../images/wood.png"

export default (props) => {
	const data = resourceAnalytics(props.buildings);
	const inlineStyle = {
		position: 'relative',
		color: 'red'
	}
	return (
		<div style={inlineStyle}>
			<div>
				<h1>Total Resources Remaining:</h1>
				<div><img src={FoodImage} alt="food" /><p>{data.left.food}</p></div>
				<div><img src={WoodImage} alt="food" /><p>{data.left.wood}</p></div>
				<div><img src={IronImage} alt="food" /><p>{data.left.iron}</p></div>
				<div><img src={SilverImage} alt="food" /><p>{data.left.silver}</p></div>
			</div>
			<div>
				<h1>Total Resources Spent:</h1>
				<div><img src={FoodImage} alt="food" /><p>{data.spent.food}</p></div>
				<div><img src={WoodImage} alt="food" /><p>{data.spent.wood}</p></div>
				<div><img src={IronImage} alt="food" /><p>{data.spent.iron}</p></div>
				<div><img src={SilverImage} alt="food" /><p>{data.spent.silver}</p></div>
			</div>
			<div>
				<h1>Total Time Remaining:</h1>
				<div><img src={FoodImage} alt="food" /><p>{data.left.food}</p></div>
				<div><img src={WoodImage} alt="food" /><p>{data.left.wood}</p></div>
				<div><img src={IronImage} alt="food" /><p>{data.left.iron}</p></div>
				<div><img src={SilverImage} alt="food" /><p>{data.left.silver}</p></div>
			</div>
			<div>
				<h1>Total Time Spent:</h1>
				<div><img src={FoodImage} alt="food" /><p>{data.spent.food}</p></div>
				<div><img src={WoodImage} alt="food" /><p>{data.spent.wood}</p></div>
				<div><img src={IronImage} alt="food" /><p>{data.spent.iron}</p></div>
				<div><img src={SilverImage} alt="food" /><p>{data.spent.silver}</p></div>
			</div>
		</div>
	)
}
