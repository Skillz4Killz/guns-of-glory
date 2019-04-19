import React from "react"
import "./item.css"

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
				<img src={this.props.image} alt={this.props.name} className="itemImage" />
				<div className="itemBadge">{this.state.level}</div>
				<h3 className="itemBuildingName">{this.props.name}</h3>
				{<p className="itemResources">{this.state.resources.map((resource) => resource.amount ? `${resource.amount} ${resource.type.substring(0, 1)}` : '').join(' ')}</p>}
				<div className="itemLevelupIconDiv">
					<h1 className="done" onClick={this.finishLevel}><span role="img" aria-label="check">✅</span></h1>
				</div>
			</div>
		)
	}
}

export default Item
