import { createContext, useState } from "react";

export const FoldersContext = createContext();
export const FoldersContextUpdater = createContext();

function FoldersProvider({ children }) {
  const [folders, setFolders] = useState([]);
  return (
    <FoldersContext.Provider value={{ folders }}>
      <FoldersContextUpdater.Provider value={{ setFolders }}>
        {children}
      </FoldersContextUpdater.Provider>
    </FoldersContext.Provider>
  );
}

export default FoldersProvider;
