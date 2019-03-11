import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const enhancers = compose(
	typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
		? window.devToolsExtension && window.devToolsExtension()
		: f => f
);

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default initialState =>
	createStoreWithMiddleware(rootReducer, initialState, enhancers);
