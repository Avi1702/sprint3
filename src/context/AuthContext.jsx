import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // code here
  const [auth,setAuth]=React.useState(false)

  function changeAuth(){
    setAuth(true)
  }

  return <AuthContext.Provider value={{auth,changeAuth}}>{children}</AuthContext.Provider>;
};
