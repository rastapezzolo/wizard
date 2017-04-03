import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './reducers'
import { VisibleButtonList } from './containers/VisibleButtonList'

const rootEl = document.getElementById('root')


const renderApp = () => ReactDOM.render(
	<Provider store={store}>
		<VisibleButtonList />
	</Provider>
, rootEl);

store.subscribe(renderApp);

renderApp();

