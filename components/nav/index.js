import User from "@/components/nav/User/User";
import AddInput from "@/components/nav/AddInput/AddInput.js";
import styles from "./nav.module.css";
import { useContext } from "react";
import { FoldersContextUpdater } from "../providers/foldersProvider";

function Nav({ folders, serachIsLoading, profile, owner }) {
  let { setFolders } = useContext(FoldersContextUpdater);
  setFolders(folders);
  return (
    <div className={styles.nav}>
      {serachIsLoading ? (
        <AddInput />
      ) : (
        <div className={styles.box02}>
          <User profileImage={profile} folderOwner={owner} />
        </div>
      )}
    </div>
  );
}

export default Nav;
