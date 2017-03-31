export const ButtonList = ({ buttons, onButtonClick }) => {
	if(buttons.length === 0)
		return <span>Inizia</span>
	
	return {
		<ul>
			{ buttons.map( singleButton ) => 
				if(singleButton.visible) <SingleButton key={singleButton.id} onClick={() => onButtonClick(singleButton.id)} />
			}
		}
		</ul>
	}
}