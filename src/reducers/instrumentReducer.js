

const defaultState = { 
	instruments: [],
	buttons: [],
	loading: false
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

*/		case 'FETCH_INSTRUMENTS' :
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