import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getUser, login } from '../services/userService' // Ajuste o caminho para suas funções
import { MeResponse } from '../types/auth';
import { User } from '../types/user';



// Tipo do contexto
interface UserContextType {
  user:  MeResponse | null;
  setUser: (user: MeResponse | null) => void;
  loading: boolean;
  loginUser: (email: string, password_hash: string) => Promise<void>;
  logoutUser: () => void;
}

// Crie o contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provedor do contexto
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<MeResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // Busca o usuário ao carregar o componente
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const userData = await getUser(token);
          setUser(userData);
        } catch (error) {
          console.error('Erro ao buscar usuário:', error);
          localStorage.removeItem('token'); // Remove token inválido
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  // Função de login
  const loginUser = async (email: string, password_hash: string) => {
    try {
      setLoading(true);
      const authResponse = await login(email, password_hash);
      const token = authResponse.access_token;
      localStorage.setItem('token', token); // Armazena o token
      const userData = await getUser(token); // Busca os dados do usuário
      setUser(userData);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error; // Permite que o componente chamador trate o erro
    } finally {
      setLoading(false);
    }
  };

  // Função de logout
  const logoutUser = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loading, loginUser, logoutUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
};