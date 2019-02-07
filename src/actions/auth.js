import request from 'superagent';

export const LOGIN = 'LOGIN';

const baseUrl = 'http://localhost:4000';

const loginSuccess = jwt => ({
  type: LOGIN,
  jwt
});

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/logins`)
    .send({ email, password })
    .then(response => dispatch(loginSuccess(response.body.jwt)))
    .catch(console.error);
};
