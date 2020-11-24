import { counter, chatCounter, groups, chatRoom,res, user, chatTag,signup,groupUser,sendMail,accept,coming,suggest } from './counter';
import tag from './tag';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({coming,suggest, counter, chatCounter, groups, tag, chatRoom, res, user, chatTag,signup,groupUser,sendMail,accept });

export default rootReducer;