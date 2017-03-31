const defaultState = { 
	buttons: [],
	listChildren: [], 
	listInstruments: [],
	loading: false,
	error: null,
	parent: null 
}

export const backReducer = ( state = defaultState, action ) =>{
	switch(action.type){
		case'TOGGLE_BUTTON':
			return {
				...state,
				buttons: state.buttons.map((button) => {
					if( action.id === button.id ) 
						button.visible = true
					return button
				})
			}
		default: 
			return state;
	}
}