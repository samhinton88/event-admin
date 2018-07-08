import {
  RESOURCE_FORM_INPUT_CHANGE,
  RESOURCE_FORM_SUBMIT_SUCCESS,
  RESOURCE_FORM_HYDRATE
} from '../actions/types';

const defaultState = {
  title: '',
  image: '',
  venue: '',
  text: '',
  resourceId: null,
  typeMap: {

    image: 'file'
  },
  previewImageUrl: ''
};

export default (state = defaultState, action) => {
  switch(action.type) {

    case RESOURCE_FORM_INPUT_CHANGE:
      return {
        ...state,
        [action.field]:action.payload
      }
    case RESOURCE_FORM_SUBMIT_SUCCESS:
      return defaultState
    case RESOURCE_FORM_HYDRATE:
      return {
        ...action.payload,
        typeMap: defaultState.typeMap,
        resourceId: action.payload._id
      }
  }

  return state;
}
