import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  login: (token) => {},
  logout: () => {},
  getToken: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const tokenInLocalStorage = localStorage.getItem('token');
    if (tokenInLocalStorage) {
      setToken(tokenInLocalStorage);
    }
  }, []);

  const login = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    localStorage.clear();
    setToken('');
  };

  const getToken = () => {
    if (token) {
      return token;
    }
    const localStorageToken = localStorage.getItem('token');
    if (localStorageToken) {
      return localStorageToken;
    }

    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        getToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  const ctx = useContext(AuthContext);

  return ctx;
};

export { AuthProvider, useAuth };
