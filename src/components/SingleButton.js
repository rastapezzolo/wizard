import React from 'react'

const SingleButton = ({ label, onClick }) => {
	return (
		<button onClick={onClick}> {label} </button>
	)
}


SingleButton.propTypes = {
	label: React.PropTypes.string,
	onClick: React.PropTypes.func
};

export default SingleButton