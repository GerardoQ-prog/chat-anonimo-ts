import { combineReducers } from 'redux';
import userReducer from '../reducer/user'
import usersReducer from '../reducer/users'
import groupsReducer from '../reducer/groups'
import messagesReducer from '../reducer/messages'

export default combineReducers({
    userReducer,
    usersReducer,
    groupsReducer,
    messagesReducer
});