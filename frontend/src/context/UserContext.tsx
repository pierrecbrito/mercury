import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types/user';


// Defina o tipo do contexto
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Crie o contexto com um valor inicial undefined
const UserContext = createContext<UserContextType | undefined>(undefined);

// Crie o provedor do contexto
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
};