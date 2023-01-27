import api from './api';

export async function signIn(email, password) {
  const response = await api.post('login', { email, password });
  return response;
}

export async function signUp(userSignup) {
  const response = await api.post('signup', userSignup);
  return response;
}
