

const defaultState = { 
	instruments: [],
	buttons: [],
	loading: true
}

const instrumentReducer = ( state = defaultState, action ) => {
	switch(action.type){
/*		case 'FETCH_INSTRUMENT_DATA':
			return{
				...state,
				loading: true
			}
		case 'FETCH_INSTRUMENT_DATA_SUCCESS':
			return {
				...state,
				visible: true,
				loading: false,
				img: action.payload.data.img,
				url: action.payload.data.url,
				title: action.payload.data.title,
				description: action.payload.data.description
			}
		case 'FETCH_INSTRUMENT_DATA_FAIL':
			return{
				...state,
				error: action.payload.data.error
			}
*/		case 'TOGGLE_BUTTON' :
			console.log(state)
			return {
				...state,
				instruments: state.buttons.map((button) => {
					console.log(button)
/*					instrument.active = false
					if( Array.isArray(action.id) && action.id.includes(instrument.id))
						instrument.active = true
					if( action.id === instrument.id ) 
						instrument.active = true
					return instrument
*/				})
			}
		default: return state;
	}
}
export default instrumentReducer