import { combineReducers } from 'redux';
import filterActionsReducer from './filterActionsReducer';

import charactersReducer from './reducers';

const rootReducer = combineReducers({charactersReducer, filterActionsReducer});
// console.log("root reducer >>", rootReducer());

export default rootReducer;