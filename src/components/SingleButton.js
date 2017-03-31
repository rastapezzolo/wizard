let SingleButton = ({ id, onClick, text, children }) => {
	return (
		<div>
			<button id="{id}" onClick={onClick}> {text} </button>
		</div>
	)
}