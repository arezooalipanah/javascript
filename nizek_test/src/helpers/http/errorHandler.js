import { notification } from './notification';
import { parseCookies } from 'nookies';
import { logout } from '../auth';

export const errorResult = async (result, options) => {
  const response = await result.json();
  if (response?.statusCode === 401) {
    if (parseCookies(options?.ctx).NizekToken) {
      logout({ ctx: options?.ctx, isForce: true });
    }
  }
  notification(response.message, options, 'error');
  return response;
};
