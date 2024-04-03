import defaultProfile from "@/public/Avatar.svg";
import User from "@/components/nav/User/User";
import AddInput from "@/components/nav/AddInput/AddInput.js";
import styles from "./nav.module.css";
import { useContext, useEffect } from "react";
import { FoldersContextUpdater } from "../providers/foldersProvider";

function Nav({ folders, serachIsLoading, profile, owner }) {
  let { setFolders } = useContext(FoldersContextUpdater);
  useEffect(() => {
    setFolders(folders);
  }, []);

  return (
    <div className={styles.nav}>
      {serachIsLoading ? (
        <AddInput />
      ) : (
        <div className={styles.box02}>
          <User profileImage={profile || defaultProfile} folderOwner={owner} />
        </div>
      )}
    </div>
  );
}

export default Nav;
