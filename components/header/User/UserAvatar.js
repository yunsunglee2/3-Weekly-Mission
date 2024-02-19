import Image from "next/image";
import styles from './UserAvatar.module.css'

function UserAvatar({value}) {
  return(
    <div className={styles.UserAvatar}>
      <Image width={64} height={64} src={value} alt={value} />
    </div>
  )
}

export default UserAvatar;