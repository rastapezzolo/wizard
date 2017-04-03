import { React } from 'react'
/*import SingleButton from './SingleButton'*/

const ButtonList = ({ buttons, onButtonClick }) => {
	console.log(buttons)
	console.log(onButtonClick)
	if(buttons.length === 0)
		return <span>Inizia</span>
	
	return (
			<ul>
				<li>aaa</li>
				
			</ul>
		)
}

ButtonList.propTypes = {
  buttons: React.PropTypes.array,
  onButtonClick: React.PropTypes.func
};

export default ButtonList