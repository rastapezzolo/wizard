import { createStore } from 'redux';
import { combineReducers } from 'redux';
import buttonReducer from './buttonReducer'
import backReducer from './backReducer'
import instrumentReducer from './instrumentReducer'

/*
 * Diversi reducer possono essere combinati se fosse
 * necessario separare la gestione dello stato di diverse
 * parti di applicazione.
 */


const reducers = combineReducers({
	buttonReducer,
	backReducer,
	instrumentReducer
})

export default createStore(reducers, window.devToolsExtension && window.devToolsExtension());
									// ^^^							^^^
									// abilitiamo il debug via devTools del browser