import { transformResponse } from './transformResponse';
import { errorResult } from './errorHandler';
import { parseCookies } from 'nookies';
import { Url } from './url';


const fetchConfig = (body, options) => {
  const { method } = options;
  const token = parseCookies(options?.ctx)?.NizekToken;
  const config = {
    method,
    headers: {},
  };

  if (token) config.headers.Authorization = `Bearer ${token}`;
  config.headers['Content-Type'] = 'application/json';
  if (body) {
    config.body = JSON.stringify(body);
  }

  return config;
};

const httpRequest = (url, body, options) =>
  new Promise((resolve, reject) => {
    fetch(Url(url), fetchConfig(body, options))
      .then((result) => {
        if (result.ok) {
          transformResponse(result, options).then(resolve);
        } else {
          errorResult(result, options).then(reject);
        }
      })
      .catch(reject);
  });

const http = (url) => ({
  get: (options) => httpRequest(url, null, { method: 'GET', ...options }),
  post: (body, options) => httpRequest(url, body, { method: 'POST', ...options }),
});

export default http;
