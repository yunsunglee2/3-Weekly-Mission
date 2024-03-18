import { useState } from "react";
import Image from "next/image";
import addImage from "@/public/add.svg";
import PopupMessage from "@/components/modal/modal.js";
import AddFolderModal from "@/components/modal/addFolderModal.js";
import styles from "@/components/main/addFolder.module.css";

export default function AddFolder() {
  const [isOpen, setIsopen] = useState(false);
  const handleClick = () => {
    setIsopen(!isOpen);
  };
  const isClose = (value) => {
    setIsopen(value);
  };

  return (
    <div className={styles.addFolder} onClick={handleClick}>
      <Image className={styles.addImage} src={addImage} alt="addImage" />
      <PopupMessage
        modalOpen={isOpen}
        onClick={isClose}
        component={<AddFolderModal />}
      />
    </div>
  );
}
