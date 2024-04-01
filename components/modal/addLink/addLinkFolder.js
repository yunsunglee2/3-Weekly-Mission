import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import CHECKIMG from "@/public/check.svg";
import styles from "@/components/modal/addLink/addLinkModal.module.css";
import {
  checkFolderContext,
  checkFolderContextUpdater,
} from "./addLinkProvider";

function Folder({ title, linksCount, folderId }) {
  const [isChecked, setIsChecked] = useState(false);
  let { setCheckedFolder } = useContext(checkFolderContextUpdater);
  let { checkedFolder } = useContext(checkFolderContext);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  useEffect(()=> {
    if (isChecked) {
      setCheckedFolder([...checkedFolder, folderId]);
    } else {
      // 배열에서 folderId 제외하기
      const currentCheckedFolder = [...checkedFolder].filter(
        (checkedFolderId) => checkedFolderId !== folderId
      );
      setCheckedFolder(currentCheckedFolder);
    }
  },[isChecked])

  return (
    <div className={styles.folder} onClick={handleClick}>
      {isChecked && (
        <Image className={styles.check} src={CHECKIMG} alt="checkImage" />
      )}
      <div className={styles.textBundle}>
        <div className={styles.title}>{title}</div>
        <div className={styles.linksCount}>{linksCount}</div>
      </div>
    </div>
  );
}

export default Folder;
