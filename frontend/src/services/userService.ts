import api from './api';
import { User } from '../types/user';
import { AuthReponse, RegisterResponse } from '../types/auth';

export const login = async (email: string, password_hash: string): Promise<AuthReponse> => {
  const response = await api.post('/auth/login', { email, password_hash });
  return response.data;
}

export const register = async (username: string, email: string, password_hash: string): Promise<RegisterResponse> => {
  const response = await api.post('/auth/register', { username, email, password_hash });
  return response.data;
}

export const getUser = async (token: string): Promise<User> => {}