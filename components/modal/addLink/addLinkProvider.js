import { createContext } from "react";
import { useState } from "react";

export const checkFolderListContext = createContext();
export const checkFolderListContextUpdater = createContext();

export function AddLinkProvier({ children }) {
  const [checkedFolderList, setCheckedFolderList] = useState([]);
  return (
    <checkFolderListContext.Provider value={{ checkedFolderList }}>
      <checkFolderListContextUpdater.Provider value={{ setCheckedFolderList }}>
        {children}
      </checkFolderListContextUpdater.Provider>
    </checkFolderListContext.Provider>
  );
}
