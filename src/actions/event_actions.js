import axios from 'axios';

import {
  EVENT_CREATE,
  EVENT_DELETE,
  EVENT_EDIT,
  FETCH_EVENTS,
  RESOURCE_FORM_SUBMIT_SUCCESS,
  HIDE_RESOURCE_FORM,
  RESOURCES_LOADING,
  RESOURCES_LOADED
} from './types';

import {BASE_URL} from './config'

export const createEvent = (data) => async dispatch => {
  console.log('in createEvent AC with data', data)
  dispatch({ type: RESOURCES_LOADING })

  const res = await axios.post(`${BASE_URL}/api/events`, data);

  dispatch({ type: RESOURCES_LOADED })
  dispatch({ type: RESOURCE_FORM_SUBMIT_SUCCESS})
  dispatch({ type: HIDE_RESOURCE_FORM })

  dispatch({ type: EVENT_CREATE, payload: res.data });
}

export const editEvent = (data, eventId) => async dispatch => {
  console.log('id in editEvent', eventId)
  const res = await axios.put(`${BASE_URL}/api/events/${eventId}`, data)

  dispatch({ type: EVENT_EDIT, payload: res.data })
  dispatch({ type: RESOURCE_FORM_SUBMIT_SUCCESS })
  dispatch({ type: HIDE_RESOURCE_FORM })
}

export const deleteEvent = (eventId) => async dispatch => {
  await axios.delete(`${BASE_URL}/api/events/${eventId}`);

  dispatch({ type: EVENT_DELETE, payload: eventId })
}

export const fetchEvents = () => async dispatch => {
  const events = await axios.get(`${BASE_URL}/api/events`);


  dispatch({ type: FETCH_EVENTS, payload: events })
}
