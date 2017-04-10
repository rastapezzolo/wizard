import React from 'react'
import style from './SingleButton.scss'


const SingleButton = ({ label, onClick }) => {
	return (
		<button className={style.button + ' ' + style.cazoz} onClick={onClick}> {label} </button>
	)
}


SingleButton.propTypes = {
	label: React.PropTypes.string,
	onClick: React.PropTypes.func
};

export default SingleButton