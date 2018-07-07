import { combineReducers } from 'redux';
import eventReducer from './event_reducer';
import authReducer from './auth_reducer';

export default combineReducers({
  events: eventReducer
})
