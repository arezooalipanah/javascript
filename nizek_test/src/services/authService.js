import http from '../helpers/http';

const login = (body) => http('auth/login').post(body, {
  showServerMessage: true,
});

export default {
  login,
};
