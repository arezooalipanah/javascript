import http from '../helpers/http';

const getAll = () => http('books').get();

export default {
  getAll,
};
