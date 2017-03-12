import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

render(
  <Provider store={store}>
    <Wizard 
	    value={store.getState()}
	    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
	    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}/>
  </Provider>,
  rootEl
)
