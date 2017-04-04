import React from 'react'
import SingleInstrument from './SingleInstrument'

const InstrumentList = ({ instruments }) => {
	if(instruments.length === 0)
		return <span>Inizia</span>
	
	return (
			<ul>
				{ instruments.map( (singleInstrument)  => {
					if(singleInstrument.active)
							return <SingleInstrument 
									key={singleButton.id} 
									img={singleInstrument.img} 
									url={singleInstrument.url} 
									title={singleInstrument.title} 
									description={singleInstrument.description} 
									/>
						})
				}
			</ul>
		)
}

InstrumentList.propTypes = {
  instruments: React.PropTypes.array,
};

export default ButtonList