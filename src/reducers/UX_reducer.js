import {
  SHOW_CREATE_FORM,
  HIDE_CREATE_FORM
} from '../actions/types';

const defaultState = {
  createFormVisible: true
};

export default (state = defaultState, action) => {
  console.log('action in UXReducer')
  switch(action.type) {
    case SHOW_CREATE_FORM:
      console.log('reducer fired')
      return {
        ...state,
        createFormVisible: true
      }
    case HIDE_CREATE_FORM:
      return {
        ...state,
        createFormVisible: false
      }

  }
  return state
}
