// src/context/AuthContext.jsx
import { jwtDecode } from "jwt-decode";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    // Return default values instead of throwing error
    console.warn("useAuth called outside AuthProvider - returning default values");
    return {
      token: null,
      user: null,
      logout: () => {},
      setToken: () => {},
      setUser: () => {},
    };
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  const logout = useCallback(() => {
    localStorage.clear();
    setToken("");
    setUser(null);
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const isExpired = decoded.exp * 1000 < Date.now();
        if (isExpired) logout();
      } catch {
        logout();
      }
    }
  }, [token, logout]);

  return (
    <AuthContext.Provider value={{ token, user, logout, setToken, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};