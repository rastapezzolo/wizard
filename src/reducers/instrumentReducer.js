

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
				instruments: state.instruments.map((singleInstrument)=>{if(singleInstrument === action.payload.id) return action.payload; else return singleInstrument}),
				loading: false,
				} 

			
		case 'FETCH_INSTRUMENT_DATA_FAIL':
			return{
				...state,
				error: action.payload.error
			}

		case 'FETCH_INSTRUMENTS' :
			return {
				...state,
				instruments: action.instruments
			}
		case 'TOGGLE_INSTRUMENTS' :
			return {
				...state,
				instruments: action.instruments
			}
		default: return state;
	}
}
export default instrumentReducer