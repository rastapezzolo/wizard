import { createStore } from 'redux';
import { combineReducers } from 'redux';
import wizard from './wizard'

/*
 * Diversi reducer possono essere combinati se fosse
 * necessario separare la gestione dello stato di diverse
 * parti di applicazione.
 */

const reducer = combineReducers({
	wizard
})

export default createStore(reducer, window.devToolsExtension && window.devToolsExtension());
									// ^^^							^^^
									// abilitiamo il debug via devTools del browser