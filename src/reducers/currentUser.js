import { LOGIN } from '../actions/auth';

export default (state = null, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return action.jwt;
    default:
      return state;
  }
};
