import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import CHECKIMG from "@/public/check.svg";
import styles from "@/components/modal/addLink/addLinkModal.module.css";
import {
  checkFolderListContext,
  checkFolderListContextUpdater,
} from "./addLinkProvider";

function Folder({ title, linksCount, folderId }) {
  const [isChecked, setIsChecked] = useState(false);
  let { setCheckedFolderList } = useContext(checkFolderListContextUpdater);
  let { checkedFolderList } = useContext(checkFolderListContext);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  // 클릭된 폴더 전역 상태 관리 
  useEffect(()=> {
    if (isChecked) {
      setCheckedFolderList([...checkedFolderList, folderId]);
    } else {
      // 배열에서 folderId 제외하기
      const currentCheckedFolderList = [...checkedFolderList].filter(
        (checkedFolderId) => checkedFolderId !== folderId
      );
      setCheckedFolderList(currentCheckedFolderList);
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
