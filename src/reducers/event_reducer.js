import {
  EVENT_CREATE,
  EVENT_EDIT,
  EVENT_DELETE,
  FETCH_EVENTS
} from '../actions/types';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case EVENT_CREATE:
      console.log('action coming through in reducer', action)
      console.log('below code does this', {
        ...state, [action.payload._id]: action.payload
      })
      return {
        ...state, [action.payload._id]: action.payload
      }

    case EVENT_EDIT:
      return {
        ...state, [action.payload._id]: action.payload
      }

    case EVENT_DELETE:
      const newState = Object.assign({}, state);
      delete newState[action.payload];
      return  newState;



    case FETCH_EVENTS:

      return {
        ...state,
        ...nomalise(action.payload.data)
      }
  }

  return state;
}


function nomalise(data) {
  // return object listing items by id


  const out = {};

  data.forEach((d) => out[d._id] = d);

  return out;
}
