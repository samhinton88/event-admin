import { combineReducers } from 'redux';
import eventReducer from './event_reducer';
import authReducer from './auth_reducer';
import tableInterfaceReducer from './table_interface_reducer';
import resourceFormReducer from './resource_form_reducer';
import UXReducer from './UX_reducer';

export default combineReducers({
  events: eventReducer,
  table: tableInterfaceReducer,
  resourceForm: resourceFormReducer,
  UX: UXReducer
})
