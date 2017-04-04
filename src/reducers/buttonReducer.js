const defaultState = { 
	buttons: [
		{
			id: 1,
			label: "casa",
			children: [ 7 ],
			instruments: [],
			active: true
		},
		{
			id: 2,
			label: "gite",
			children: [],
			instruments: [],
			active: true
		},
		{
			id: 3,
			label: "hotel",
			children: [],
			instruments: [],
			active: true
		},
		{
			id: 4,
			label: "locali",
			children: [],
			instruments: [],
			active: true
		},
		{
			id: 5,
			label: "registrazione",
			children: [],
			instruments: [],
			active: true
		},
		{
			id: 6,
			label: "stage",
			children: [],
			instruments: [],
			active: true
		},
	],
	loading: false
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
					button.active = false
					if( Array.isArray(action.id) && action.id.includes(button.id))
						button.active = true
					if( action.id === button.id ) 
						button.active = true
					return button
				})
			}
		default:
			return state
	}
}

export default buttonReducer;