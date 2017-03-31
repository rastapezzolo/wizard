const defaultState = { 
	id: null,
	visible: false,
	img: null,
	url: '',
	title: '',
	description: '',
	loading: true,
	error: null
}

export const instrumentReducer = ( state = defaultState, action ) => {
	switch(action.type){
		case 'FETCH_INSTRUMENT_DATA':
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
		default: return state;
	}
}