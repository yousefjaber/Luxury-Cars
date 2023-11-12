import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  useEffect(() => {
    // Sync user state with local storage
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const signIn = async (username, password) => {
    // Placeholder for actual sign-in logic
    if (username === 'admin' && password === 'password') {
      const userData = { username, role: 'admin' };
      setUser(userData);
      return true;
    }
    // Handle failed login attempt
    return false;
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};