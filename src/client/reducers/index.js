import serverActionsReducer from '../actions/serverActions.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    application: serverActionsReducer
});

export default rootReducer;
