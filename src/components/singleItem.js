import React from "react"
import "./item.css"
import Check from '../components/svg'
class Item extends React.Component {
	constructor() {
		super();
		this.state = {
			level: 1,
			maxLevel: 40,
			resources: [],
			done: false
		};
	}

	finishLevel = (e) => {
		e.stopPropagation()
		this.setState({ done: true });
	}

	componentDidMount() {
		this.setState({ level: this.props.level, maxLevel: this.props.maxLevel, resources: this.props.resources });
	}

	render() {
		if ((this.props.name !== 'Castle' && this.state.level >= this.state.maxLevel) || this.state.done) return (null);

		return (
			<div className="item">
				<div className='ItemInfo'>
				<div className="itemBadge">{this.state.level}</div>
				<img src={this.props.image} alt={this.props.name} className="itemImage" />
				<div className='Ab'>
				<h3 className="itemBuildingName">{this.props.name}</h3>
				{<p className="itemResources">{this.state.resources.map((resource) => resource.amount ? `${resource.amount} ${resource.type.substring(0, 1)}` : '').join(' ')}</p>}
				</div>
				<div className="Checkdone">
					<h1 className="done" onClick={this.finishLevel}><span role="img" aria-label="check"><Check></Check></span></h1>
					</div>
				</div>
			</div>
		)
	}
}

export default Item
