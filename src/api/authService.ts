import { api } from './client';

export const loginRequest = async (email: string, password: string) => {
  const res = await api.post('/auth/login', {
    username: email,
    password: password
  });

  return res.data;
};
