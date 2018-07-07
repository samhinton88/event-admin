import {
  CREATE_FORM_INPUT_CHANGE,
  CREATE_FORM_SUBMIT_SUCCESS
} from '../actions/types';

const defaultState = {
  title: '',
  image: '',
  venue: '',
  text: '',
  typeMap: {

    image: 'file'
  },
  previewImageUrl: ''
};

export default (state = defaultState, action) => {
  switch(action.type) {

    case CREATE_FORM_INPUT_CHANGE:
      return {
        ...state,
        [action.field]:action.payload
      }
    case CREATE_FORM_SUBMIT_SUCCESS:
      return defaultState
  }

  return state;
}
