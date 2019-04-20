import React from 'react'
import { resourceAnalytics } from "../utils/utils"
import FoodImage from "../images/food.png"
import IronImage from "../images/iron.png"
import SilverImage from "../images/silver.png"
import WoodImage from "../images/wood.png"
import '../components/analytics.css'

export default (props) => {
	const data = resourceAnalytics(props.buildings);
	const inlineStyle = {
		position: 'relative',
		color: 'red'
	}
	return (
		<div className='TotalResourcesGroupSScroll'>
			<div className='TotalResourcesGroup' style={inlineStyle}>
				<div className='TotalResources'>
					<h1>Total Resources Remaining</h1>
					<div className='Resources'>
						<div className='ResourcesItem'>
							<img src={FoodImage} alt="food" />
							<p>{data.left.food}</p>
						</div>
						<div className='ResourcesItem'>
							<img src={WoodImage} alt="food" />
							<p>{data.left.wood}</p>
						</div>
						<div className='ResourcesItem'>
							<img src={IronImage} alt="food" />
							<p>{data.left.iron}</p>
						</div>
						<div className='ResourcesItem'>
							<img src={SilverImage} alt="food" />
							<p>{data.left.silver}</p>
						</div>
					</div>
				</div>
				<div className='TotalResources'>
					<h1>Total Resources Spent</h1>
					<div className='Resources'>
						<div className='ResourcesItem'>
							<img src={FoodImage} alt="food" />
							<p>{data.spent.food}</p>
						</div>
						<div className='ResourcesItem'>
							<img src={WoodImage} alt="food" />
							<p>{data.spent.wood}</p>
						</div>
						<div className='ResourcesItem'>
							<img src={IronImage} alt="food" />
							<p>{data.spent.iron}</p>
						</div>
						<div className='ResourcesItem'>
							<img src={SilverImage} alt="food" />
							<p>{data.spent.silver}</p>
						</div>
					</div>
				</div>
				<div className='TotalResources'>
					<h1>Total Time Remaining:</h1>
					<div>
						<p
							style={{ color: 'white', fontSize: '32px', position: 'relative', marginTop: '32px', textAlign: 'center' }}
						>{data.left.seconds}</p>
					</div>
				</div>
				<div className='TotalResources'>
					<h1>Total Time Spent:</h1>
					<div>
						<p
							style={{ color: 'white', fontSize: '32px', position: 'relative', marginTop: '32px', textAlign: 'center' }}
						>{data.spent.seconds}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
