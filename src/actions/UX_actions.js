import {
  SHOW_CREATE_FORM,
  HIDE_CREATE_FORM
} from './types';

export const showCreateForm = () => {
  console.log('showCreateForm fired', SHOW_CREATE_FORM)
  return { type: SHOW_CREATE_FORM }
}

export const hideCreateForm = () => {
  return { type: HIDE_CREATE_FORM}
}
