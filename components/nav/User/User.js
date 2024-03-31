import UserAvatar from "./UserAvatar";
import UserNickName from "./UserNickName";
import UserFiles from "./UserFiles";
import styles from './User.module.css'

function User({profileImage, folderOwner}) {
  return (
    <div className={styles.user}>
    <div className={styles.item01}>
      <UserAvatar value={profileImage}/>
      <UserNickName value={folderOwner}/>
    </div>
    </div>
  )
}

export default User;