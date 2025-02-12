import React, { createContext, useEffect, useState } from "react";
import { getLocalStroge, setLocalStroge } from "../Utils/LacalStroge";

export const AuthContext = createContext();

function ContextProvider({ children }) {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    setLocalStroge();
    // Get data from localStorage
    const { admin, employees } = getLocalStroge();
    setUserdata({ admin, employees });
  }, []);

  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  );
}

export default ContextProvider;
