import { createContext } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const userName = "ALOK KUMAR is our boss";

  return (
    <UserContext.Provider value={{ userName }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;