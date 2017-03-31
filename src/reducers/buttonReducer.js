const defaultState = { 
	buttons: [],
	listChildren: [], 
	listInstruments: [],
	loading: false,
	error: null,
	parent: null 
}

const buttonReducer = ( state = defaultState, action ) => {
	

	switch( action.type ){

		case 'FETCH_CHILDREN' :

			return {
				...state,
				loading: true
			};

		case 'FETCH_CHILDREN_SUCCESS' :
			
			return {
				...state,
				buttons: action.payload,
				loading: false,
				listChildren: action.payload.children,
				listInstruments: action.payload.instruments,
				parent: action.payload.parent
			}

		case 'FETCH_CHILDREN_FAIL' :
			
			return {
				...state,
				loading: false,
				buttons: [],
				error: action.payload.data
			}

		case 'TOGGLE_BUTTON' :
			return {
				...state,
				buttons: state.buttons.map((button) => {
					if( action.id === button.id ) 
						button.visible = true
					return button
				})
			}
		default:
			return state
	}
}

export default buttonReducer;