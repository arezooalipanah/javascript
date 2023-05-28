
const PUBLIC_API_URL = "http://localhost:9000/";

const baseURL = (url) =>
  url.startsWith('http')
    ? url
    : `${PUBLIC_API_URL}${url}`;

export const Url = (url) => {
  if (typeof url === 'string') {
    if (url.startsWith('http')) {
      return url;
    }
    return baseURL(url);
  }
};

