import { createContext, useState } from "react";

export const TokenContext = createContext();
export const TokenContextUpater = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  return (
    <TokenContext.Provider value={{ token }}>
      <TokenContextUpater.Provider value={{ setToken }}>
        {children}
      </TokenContextUpater.Provider>
    </TokenContext.Provider>
  );
}
