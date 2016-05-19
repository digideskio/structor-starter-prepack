import { combineReducers } from 'redux';
import test1Reducer from '../controllers/Test/Test1/reducer.js';
const reducer = combineReducers({ test1: test1Reducer });
export default reducer;