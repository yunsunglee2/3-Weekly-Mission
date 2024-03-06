import User from "@/components/header/User/User";
import AddInput from "@/components/header/AddInput/AddInput.js";
import styles from "./Header.module.css";

function Header({ serachIsLoading, profile, owner}) {

  return (
    <div className={styles.Header}>
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

export default Header;
