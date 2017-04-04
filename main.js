import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './src/reducers'
import VisibleButtonList  from './src/containers/VisibleButtonList'

const rootEl = document.getElementById('app')

render(
	<Provider store={store}>
		<VisibleButtonList />
	</Provider>
, rootEl);

