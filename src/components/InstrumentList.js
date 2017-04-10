import React from 'react'
import SingleInstrument from './SingleInstrument'


class InstrumentList extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		const {instruments, onLoadInstrument} = this.props;
									console.log(instruments)
		if('undefined' !== typeof instruments && instruments.length > 0)
			return (
					<ul>
						{ 
							instruments.map( (singleInstrument)  => {
									return <SingleInstrument 
											key={'string'===typeof singleInstrument ? singleInstrument : singleInstrument.id} 
											img={singleInstrument.img} 
											url={singleInstrument.url} 
											title={singleInstrument.title} 
											description={singleInstrument.description} 
											onLoad={() => onLoadInstrument(singleInstrument)}
											/>
								})
						}
					</ul>
				)
		else 
			return null

	}
}

InstrumentList.propTypes = {
  instruments: React.PropTypes.array,
  onLoadInstrument: React.PropTypes.func,

};

export default InstrumentList