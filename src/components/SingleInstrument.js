import React from 'react'

class SingleInstrument extends React.Component{
	constructor(){
		super()
	}

	componentDidMount(){
		this._onLoad()
	}

	_onLoad(){
		this.props.onLoad()
	}


	render(){
		const { id, url, title, img, description } = this.props
		return (
			<li id={id}>
				<a href={url}>
					<span>{title}</span>
					<img src={img} />
					<p>{description}</p>
				</a>
			</li>
		)
	}
}


SingleInstrument.propTypes = {
	id: React.PropTypes.string,
	img: React.PropTypes.string,
	url: React.PropTypes.string,
	title: React.PropTypes.string,
	description: React.PropTypes.string,
	onLoad: React.PropTypes.func
};

export default SingleInstrument