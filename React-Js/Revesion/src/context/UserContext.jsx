import React, { createContext } from "react";
export const userData = createContext();

function UserContext({ children }) {
  

  const userName = "Raheem";
  return (
    <div>
      <userData.Provider value={userName}>{children}</userData.Provider>
    </div>
  );
}

export default UserContext;
