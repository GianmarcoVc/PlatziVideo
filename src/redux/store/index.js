import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import reducer from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
