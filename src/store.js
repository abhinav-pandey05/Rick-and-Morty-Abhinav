import { createStore} from 'redux';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import the root reducer
import rootReducer from './Reducers/combineReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const defaultState = {};
const middlewares = [thunk];
const store =  createStore(rootReducer, defaultState, composeEnhancers(
    applyMiddleware(...middlewares)));
export default store;