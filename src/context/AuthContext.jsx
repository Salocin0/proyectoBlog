import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(() => {
    const store = localStorage.getItem("isLogged");
    return store ? store : false;
  });

//sesionid

  useEffect(() => {
    localStorage.setItem("isLogged", isLogged);
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
