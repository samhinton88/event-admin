import {
  SHOW_RESOURCE_FORM,
  HIDE_RESOURCE_FORM,
  SET_RESOURCE_FORM_MODE,
  RESOURCES_LOADING,
  RESOURCES_LOADED
} from '../actions/types';

const defaultState = {
  resourceFormVisible: false,
  updateViewFormVisible: false,
  resourceFormMode: null,
  resourceIsPreviewed: true,
  loadingResources: false
};

export default (state = defaultState, action) => {
  console.log('action in UXReducer')
  switch(action.type) {
    case RESOURCES_LOADING:
      return {
        ...state,
        loadingResources: true
      }
    case RESOURCES_LOADED:
      return {
        ...state,
        loadingResources: false
      }
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
