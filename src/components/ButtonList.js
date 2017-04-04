import React from 'react'
import SingleButton from './SingleButton'

const ButtonList = ({ buttons, onButtonClick }) => {
	if(buttons.length === 0)
		return <span>Inizia</span>
	
	return (
			<ul>
				{ buttons.map( (singleButton)  => {
					if(singleButton.active)
							return <SingleButton key={singleButton.id} label={singleButton.label} onClick={() => onButtonClick(singleButton.id)} />
						})
				}
			</ul>
		)
}

ButtonList.propTypes = {
  buttons: React.PropTypes.array,
  onButtonClick: React.PropTypes.func
};

export default ButtonList