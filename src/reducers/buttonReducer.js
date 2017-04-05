const defaultState = { 
	buttons: [],
	children: [],
	instruments: [],
	loading: false
}

const buttonReducer = ( state = defaultState, action ) => {
	
	switch( action.type ){



		case 'FETCH_CHILDREN' :
			return {
				...state,
				buttons: state.buttons.map( (button) => {
						state.children.map((child) => {
							if('undefined' !== typeof(child) && child.includes(button.id))
								button.active = true
						}
					) 
					return button
				}),
				instruments: state.buttons.filter( (button) =>{ 
								return button.id === action.idButton && button.instruments.length > 0
							}).map( (button) => {return button.instruments})[0]

			};

		case 'FETCH_BUTTONS' :

			return {
				...state,
				loading: true
			};

		case 'FETCH_BUTTONS_SUCCESS' :
			return {
				...state,
				buttons: action.payload,
				loading: false,
			}

		case 'FETCH_BUTTONS_FAIL' :
			
			return {
				...state,
				loading: false,
				buttons: [],
				error: action.payload.data
			}

		case 'TOGGLE_BUTTON' :
			return {
				...state,
				children: state.buttons.map((button) => {
					button.active = false
					if( action.id === button.id ) {
						return button.children
					}
					
				}),
			}
		default:
			return state
	}
}

export default buttonReducer;