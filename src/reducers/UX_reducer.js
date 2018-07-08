import {
  SHOW_RESOURCE_FORM,
  HIDE_RESOURCE_FORM,
  SET_RESOURCE_FORM_MODE
} from '../actions/types';

const defaultState = {
  resourceFormVisible: false,
  updateViewFormVisible: false,
  resourceFormMode: null,
  resourceIsPreviewed: true
};

export default (state = defaultState, action) => {
  console.log('action in UXReducer')
  switch(action.type) {
    case SHOW_RESOURCE_FORM:
      return {
        ...state,
        resourceFormVisible: true
      }
    case HIDE_RESOURCE_FORM:
      return {
        ...state,
        resourceFormVisible: false
      }
    case SET_RESOURCE_FORM_MODE:
      return {
        ...state,
        resourceFormMode: action.payload
      }

  }
  return state
}
