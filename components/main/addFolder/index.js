import { useState } from "react";
import Image from "next/image";
import addImage from "@/public/add.svg";
import PopupMessage from "@/components/modal/modal.js";
import AddFolderModal from "@/components/modal/addFolder/addFolderModal.js";
import styles from "./addFolder.module.css"

export default function AddFolder() {
  const [isOpen, setIsopen] = useState(false);
  const handleClick = (ismodalOpen) => {
    setIsopen(ismodalOpen);
  };
  return (
    <div className={styles.addFolder}>
      <div className={styles.addFolderWrapper} onClick={handleClick}>
        <span className={styles.text}>폴더 추가</span>
        <Image className={styles.addImage} src={addImage} alt="addImage" />
      </div>
      <PopupMessage
        component={<AddFolderModal />}
        modalOpen={isOpen}
        onClick={handleClick}
      />
    </div>
  );
}
