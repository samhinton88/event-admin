import {
  SHOW_RESOURCE_FORM,
  HIDE_RESOURCE_FORM,
  SET_RESOURCE_FORM_MODE
} from './types';

export const showResourceForm = () => {
  return { type: SHOW_RESOURCE_FORM }
}

export const hideCreateForm = () => {
  return { type: HIDE_RESOURCE_FORM}
}

export const setResourceFormMode= (mode) => {
  return { type: SET_RESOURCE_FORM_MODE, payload: mode}
}


