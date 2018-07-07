import axios from 'axios';

import {
  EVENT_CREATE,
  EVENT_DELETE,
  EVENT_EDIT,
  FETCH_EVENTS
} from './types';

import {BASE_URL} from './config'

export const createEvent = (data) => async dispatch => {
  console.log('in createEvent AC with data', data)

  const newEvent = await axios.post(`${BASE_URL}/api/events`, data);

  console.log('newEvent coming back before reducer', newEvent)
  dispatch({ type: EVENT_CREATE, payload: newEvent.data });
}

export const editEvent = (data, eventId) => async dispatch => {
  const editedEvent = await axios.put(`${BASE_URL}/api/events/${eventId}`, data)

  dispatch({ type: EVENT_EDIT, payload: editedEvent })
}

export const deleteEvent = (eventId) => async dispatch => {
  await axios.delete(`${BASE_URL}/api/events/${eventId}`);

  dispatch({ type: EVENT_DELETE, payload: eventId })
}

export const fetchEvents = () => async dispatch => {
  const events = await axios.get(`${BASE_URL}/api/events`);


  dispatch({ type: FETCH_EVENTS, payload: events })
}
