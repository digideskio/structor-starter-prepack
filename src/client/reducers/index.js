import serverActionsReducer from '../actions/Demo/serverActions.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    application: serverActionsReducer
});

export default rootReducer;
