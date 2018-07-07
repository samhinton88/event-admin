import { combineReducers } from 'redux';
import eventReducer from './event_reducer';
import authReducer from './auth_reducer';
import tableInterfaceReducer from './table_interface_reducer';
import createFormReducer from './create_form_reducer';

export default combineReducers({
  events: eventReducer,
  table: tableInterfaceReducer,
  createForm: createFormReducer
})
