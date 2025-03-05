import api from './api';
import { User } from '../types/user';
import { AuthReponse } from '../types/auth';

export const login = async (email: string, password_hash: string): Promise<AuthReponse> => {
  const response = await api.post('/auth/login', { email, password_hash });
  return response.data;
}
