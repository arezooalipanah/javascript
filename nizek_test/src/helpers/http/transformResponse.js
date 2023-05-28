import { notification } from './notification';

export const transformResponse = async (result, options) => {
  const response = await result.json();
  notification(response.message, options, 'success');
  return response;
};
