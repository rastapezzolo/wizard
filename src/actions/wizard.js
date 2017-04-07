import axios from 'axios';

/*** BUTTON COMPONENT ***/
export const toggleButton = (id) => {
	return {
		type: 'TOGGLE_BUTTON',
		id
	}
}

export const fetchButtons = () => {
	let request = axios({
		method: 'GET',
		url: '/db.json',
	})

	return {
		type: 'FETCH_BUTTONS',
		payload: request
	} 
}

export const fetchButtonsSuccess = (buttons) => {
	return {
		type: 'FETCH_BUTTONS_SUCCESS',
		payload: buttons
	}
}

export const fetchButtonsFail = (error) => {
	return {
		type: 'FETCH_BUTTONS_FAIL',
		payload: error
	}
}


export const fetchChildren = (idButton, instruments) => {

	return {
		type: 'FETCH_CHILDREN',
		idButton,
		instruments
	}
}


export const toggleInstruments = (instruments) => {
	return {
		type: 'TOGGLE_INSTRUMENTS',
		instruments: instruments
	}
}

/*** BACK COMPONENT ***/
//utilizza la toggleButton già dichiarata



/*** INSTRUMENT COMPONENT **/

export const fetchInstrumentData = (instruments) => {
	let request = axios({
		method: 'GET',
		url: '/dbInstrument.json',
		data: {
			instruments
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

export const fetchInstruments = (instruments) => {
	return {
		type: 'FETCH_INSTRUMENTS',
		instruments
	}
}