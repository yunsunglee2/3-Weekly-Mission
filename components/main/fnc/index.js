import { useState } from "react";
import PopUpMessage from "@/components/modal/UI/popUpMessage";
import ShareModal from "@/components/modal/shareFolder/shareModal";
import ChangeNameModal from "@/components/modal/changeName/changeNameModal";
import DeleteModal from "@/components/modal/deleteFolder";
import styles from "./fnc.module.css";
import Image from "next/image";

export default function Fnc({ currentFolderName, folderId, value, src }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = (value) => {
    setIsModalOpen(value);
  };

  return (
    <div className={styles.fnc}>
      <div className={styles.image}>
        <Image src={src} alt="img" />
      </div>
      <div className={styles.text} onClick={handleClick}>
        {value}
      </div>
      {`${value}` === "삭제" ? (
        <PopUpMessage
          component={<DeleteModal currentFolderName={currentFolderName} onClick={handleClick} folderId={folderId} />}
          modalOpen={isModalOpen}
          onClick={handleClick}
        />
      ) : `${value}` === "공유" ? (
        <PopUpMessage
          component={<ShareModal />}
          modalOpen={isModalOpen}
          onClick={handleClick}
        />
      ) : (
        <PopUpMessage
          component={
            <ChangeNameModal onClick={handleClick} folderId={folderId} />
          }
          modalOpen={isModalOpen}
          onClick={handleClick}
        />
      )}
    </div>
  );
}
