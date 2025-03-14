import api from './api';
import { ConversationsResponse } from '../types/Conversation';

export const getConversationsFromUser = async (): Promise<ConversationsResponse> => {
  const response = await api.post('/conversations');
  return response.data;
}