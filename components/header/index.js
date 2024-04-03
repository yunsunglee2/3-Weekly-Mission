import defaultProfile from "@/public/Avatar.svg";
import logoImage from "@/public/Linkbrary.svg";
import Account from "@/components/nav/Account/index.js";
import Logo from "@/components/nav/Logo/Logo";
import styles from "@/components/header/header.module.css";

function Header({ profileImage, name, email }) {
  return (
    <div className={styles.header}>
      <div className={styles.box01}>
        <div className={styles.item01}>
          <Logo value={logoImage} />
          <Account profileImage={profileImage || defaultProfile} name={name} email={email} />
        </div>
      </div>
    </div>
  );
}

export default Header;
