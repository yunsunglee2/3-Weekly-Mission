import Image from "next/image";
import styles from "./UserAvatar.module.css";

function UserAvatar({ value }) {
  return (
    <div className={styles.UserAvatar}>
      <Image priority width={64} height={64} src={value} alt={value} as="img" />
    </div>
  );
}

export default UserAvatar;
