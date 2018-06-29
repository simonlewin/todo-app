import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from './data/reducer'
import initial from './data/initial'

import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer, 
	initial, 
	composeEnhancers(applyMiddleware(thunk))
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
	<Provider store={ store }>
    <App />
	</Provider>,
	document.getElementById("root"),
);
