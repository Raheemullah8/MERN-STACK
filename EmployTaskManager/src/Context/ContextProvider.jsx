import React, { createContext, useEffect, useState } from "react";
import { getLocalStroge, setLocalStroge } from "../Utils/LacalStroge";

export const AuthContext = createContext();
setLocalStroge();

function ContextProvider({ children }) {

  const [userdata, setUser] = useState(null);

 useEffect(()=>{
  const {admin,employees} = getLocalStroge();
  setUser({admin,employees})

},[])

  return(
     <AuthContext.Provider value={userdata}>
     {children}
  </AuthContext.Provider>)
}

export default ContextProvider;
