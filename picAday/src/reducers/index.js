import {combineReducers} from 'redux';
import userEntry from './UserEntryReducer';

export default combineReducers({
    userEntry: userEntry,

});
