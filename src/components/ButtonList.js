import React from 'react'
import SingleButton from './SingleButton'
import style from './ButtonList.scss'

class ButtonList extends React.Component{
	constructor(){
		super();
	}
	

	componentWillReceiveProps(nextProps) {
		if('undefined' !== typeof nextProps.instruments && nextProps.instruments.length > 0 )
			this.props.fetchInstruments(nextProps.instruments)
	}
	_updateInstruments(singleButton){
		this.props.onButtonClick(singleButton.id)

	}

	render(){

		const { buttons } = this.props;
		console.log(style)
		return (
			
			<ul className={style.list}>
				{ 	
					buttons.map( (singleButton)  => {
						if( singleButton.active /*&& ('undefined' === typeof instruments || instruments.length === 0*/)
							return <li key={singleButton.id}
										className={style.listItem} >
										<SingleButton 
										label={singleButton.label} 
										onClick={() => this._updateInstruments(singleButton)} 
										/>
									</li>
									
					})
				}
			</ul>
		)
	}
	componentDidMount(){
		this.props.onLoadButtons();
	}
}


ButtonList.propTypes = {
	buttons: React.PropTypes.array,
	instruments: React.PropTypes.array,
	onButtonClick: React.PropTypes.func,
	fetchInstruments: React.PropTypes.func,
	onLoadButtons: React.PropTypes.func
};

export default ButtonList;