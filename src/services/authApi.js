import api from './api';

export async function signIn(email, password) {
  const response = await api.post('login', { email, password });
  return response;
}
