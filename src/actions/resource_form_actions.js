import axios from 'axios';

import { BASE_URL } from './config';

import {
  RESOURCE_FORM_INPUT_CHANGE,
  RESOURCE_FORM_SUBMIT,
  RESOURCE_FORM_HYDRATE
} from './types';

export const changeFormInput = (field, text) => {
  console.log('field', field, 'text', text)

  return { type: RESOURCE_FORM_INPUT_CHANGE, payload: text, field }
}

export const createFormSubmit = () =>  {

  return { type: RESOURCE_FORM_SUBMIT }
}

export const hydrateResourceForm = (resourceData) => {
  return { type: RESOURCE_FORM_HYDRATE, payload: resourceData }
}
