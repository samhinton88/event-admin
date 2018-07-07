import {
  CREATE_FORM_INPUT_CHANGE,
  CREATE_FORM_SUBMIT
} from './types';

export const changeFormInput = (field, text) => {

  return { type: CREATE_FORM_INPUT_CHANGE, payload: text, field }
}

export const createFormSubmit = () => {
  return { type: CREATE_FORM_SUBMIT }
}
