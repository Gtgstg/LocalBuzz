import { counter, customAsyncData } from './counter';
import tag from './tag';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ counter, customAsyncData, tag });

export default rootReducer;