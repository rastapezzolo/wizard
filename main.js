import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './src/reducers'
import VisibleButtonList from './src/containers/VisibleButtonList'

const rootEl = document.getElementById('root')


const renderApp = () => ReactDOM.render(
	<Provider store={store}>
		<VisibleButtonList />
	</Provider>
, rootEl);

store.subscribe(renderApp);

renderApp();

