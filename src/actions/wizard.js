import axios from 'axios';

/*** BUTTON COMPONENT ***/
export const toggleButton = (idButton) => {
	return {
		type: 'TOGGLE_BUTTON',
		id: idButton
	}
}

export const fetchChildren = (idButton) => {
	let request = axios({
		method: 'GET',
		url: '/db.json',
		data: {
			idButton
		}
	})

	return {
		type: 'FETCH_CHILDREN',
		payload: request
	}
}

export const fetchChildrenSuccess = (buttons) => {
	return {
		type: 'FETCH_CHILDREN_SUCCESS',
		payload: buttons
	}
}

export const fetchChildrenFail = (error) => {
	return {
		type: 'FETCH_CHILDREN_FAIL',
		payload: error
	}
}

export const toggleInstrument = (idButton) => {
	return {
		type: 'TOGGLE_INSTRUMENT',
		id: idButton
	}
}

/*** BACK COMPONENT ***/
//utilizza la toggleButton già dichiarata



/*** INSTRUMENT COMPONENT **/

export const fetchInstrumentData = (idInstrument) => {
	let request = axios({
		method: 'GET',
		url: 'localhost:3333/db.json',
		data: {
			idInstrument
		}
	})

	return {
		type: 'FETCH_INSTRUMENT_DATA',
		payload: request
	}
}

export const fetchInstrumentDataSuccess = (data) => {
	return {
		type: 'FETCH_INSTRUMENT_DATA_SUCCESS',
		payload: data
	}
}

export const fetchInstrumentDataFail = (error) => {
	return {
		type: 'FETCH_INSTRUMENT_DATA_FAIL',
		payload: error
	}
}