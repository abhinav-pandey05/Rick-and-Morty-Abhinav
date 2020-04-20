import { createStore} from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import the root reducer
import rootReducer from './Reducers/combineReducers';

const defaultState = {};
const middlewares = [thunk];
const store =  createStore(rootReducer, defaultState,applyMiddleware(...middlewares));
export default store;