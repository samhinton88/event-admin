import {
  CREATE_FORM_INPUT_CHANGE
} from '../actions/types';

const defaultState = {
  title: '',
  image: '',
  venue: '',
  text: ''
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case CREATE_FORM_INPUT_CHANGE:
      return {
        ...state,
        [action.field]:action.payload
      }
  }

  return state;
}
