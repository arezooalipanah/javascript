import { destroyCookie } from 'nookies';

export const logout = ({ ctx, isForce = false } = {}) => {
  console.log('ctx', ctx)
  destroyCookie(ctx, 'NizekToken', { path: '/' });
  localStorage.clear();
  if (isForce) window.location = '/';
};
