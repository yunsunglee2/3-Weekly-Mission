import { createContext } from "react";
import { useState } from "react";

export const checkFolderContext = createContext();
export const checkFolderContextUpdater = createContext();

export function AddLinkProvier({ children }) {
  const [checkedFolder, setCheckedFolder] = useState([]);
  return (
    <checkFolderContext.Provider value={{ checkedFolder }}>
      <checkFolderContextUpdater.Provider value={{ setCheckedFolder }}>
        {children}
      </checkFolderContextUpdater.Provider>
    </checkFolderContext.Provider>
  );
}
