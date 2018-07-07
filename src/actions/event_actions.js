import axios from 'axios';

import {
  EVENT_CREATE,
  EVENT_DELETE,
  EVENT_EDIT,
  FETCH_EVENTS
} from './types';

const BASE_URL = 'https://sleepy-retreat-30937.herokuapp.com/'

export const createEvent = async (data) => async dispatch => {
  const newUser = await axios.post(`${BASE_URL}/api/events`, data);

  dispatch({ type: EVENT_CREATE, payload: newUser });
}

export const editEvent = async (data, eventId) => async dispatch => {
  const editedEvent = await axios.put(`${BASE_URL}/api/events/${eventId}`, data)

  dispatch({ type: EVENT_EDIT, payload: editedEvent })
}

export const deleteEvent = async (eventId) => async dispatch => {
  await axios.delete(`${BASE_URL}/api/events/${eventId}`);

  dispatch({ type: EVENT_DELETE, payload: eventId })
}

export const fetchEvents = async () => async dispatch => {
  const events = await axios.get(`${BASE_URL}/api/events`);

  dispatch({ type: FETCH_EVENTS, payload: events })
}
