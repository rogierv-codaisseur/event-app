import request from 'superagent';

export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS';
export const EVENTS_FETCHED = 'EVENTS_FETCHED';
export const EVENT_FETCHED = 'EVENT_FETCHED';
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS';
export const EVENT_UPDATE_SUCCESS = 'EVENT_UPDATE_SUCCESS';

const baseUrl = 'http://localhost:4000';

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return;

  // a GET /events request
  request(`${baseUrl}/events`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
});

export const createEvent = data => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
});

export const loadEvent = id => dispatch => {
  request(`${baseUrl}/events/${id}`)
    .then(response => dispatch(eventFetched(response.body)))
    .catch(console.error);
};

const eventDeleted = event => ({
  type: EVENT_DELETE_SUCCESS,
  event
});

export const deleteEvent = id => dispatch => {
  request
    .delete(`${baseUrl}/events/${id}`)
    .then(() => {
      dispatch(eventDeleted({ id }));
    })
    .catch(console.error);
};

const eventUpdateSuccess = event => ({
  type: EVENT_UPDATE_SUCCESS,
  event
});

export const updateEvent = (id, data) => dispatch => {
  request
    .patch(`${baseUrl}/events/${id}`)
    .send(data)
    .then(() => {
      dispatch(eventUpdateSuccess({ id }));
    })
    .catch(console.error);
};
