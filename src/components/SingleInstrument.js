import React from 'react'

class SingleInstrument extends React.Component{
	constructor(){
		super()
	}

	componentWillMount(){
		this._onLoad()
	}

	_onLoad(){
		this.props.onLoad(this.props.id)
	}


	render(){
		const { id, url, title, img, description } = this.props
		if('undefined' !== typeof title)
			return (
				<li id={id}>
					<a href={url}>
						<span>{title}</span>
						<img src={'/src/images/'+img} />
						<p>{description}</p>
					</a>
				</li>
			)
		else return null
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