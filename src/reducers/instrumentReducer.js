

const defaultState = { 
	instruments: [],
	buttons: [],
	loading: false
}

const instrumentReducer = ( state = defaultState, action ) => {
	switch(action.type){
		case 'FETCH_INSTRUMENT_DATA':
			return{
				...state,
				loading: true
			}
		case 'FETCH_INSTRUMENT_DATA_SUCCESS':
			return {
				...state,
				instruments: action.payload.instruments,
				loading: false,
				} 

			
		case 'FETCH_INSTRUMENT_DATA_FAIL':
			return{
				...state,
				error: action.payload.data.error
			}

		case 'FETCH_INSTRUMENTS' :
			return {
				...state,
				instruments: action.instruments
			}
		case 'TOGGLE_INSTRUMENTS' :
		console.log(action)
			return {
				...state,
				instruments: action.instruments
			}
		default: return state;
	}
}
export default instrumentReducer