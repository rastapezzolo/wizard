const wizard = ( state = { list:[], loading: false, error:null }, action ) => {
	switch( action.type ){

		case 'FETCH_REPOS' :

			return {
				...state,
				loading: true
			};

	}
}
export default wizard;