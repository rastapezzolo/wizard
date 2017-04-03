import React from 'react'

SingleButton.propTypes = {
  id: React.PropTypes.array,
  onClick: React.PropTypes.func,
  text: React.PropTypes.string,
  children: React.PropTypes.array
};

const SingleButton = ({ id, onClick, text, children }) => {
	console.log(id, children)
	return (
		<div>
			<button id="{id}" onClick={onClick}> {text} </button>
		</div>
	)
}
export default SingleButton