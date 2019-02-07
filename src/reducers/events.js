import { EVENTS_FETCHED, EVENT_CREATE_SUCCESS } from '../actions/events';

export default (state = null, action = {}) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return [...action.events];
    case EVENT_CREATE_SUCCESS:
      if (!action.events) return state;
      return [...state, action.events];
    default:
      return state;
  }
};
