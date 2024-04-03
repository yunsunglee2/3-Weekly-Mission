import { useContext, useState } from "react";
import Image from "next/image";
import PopUpMessage from "@/components/modal/UI/popUpMessage";
import DeleteLinkModal from "@/components/modal/deleteLink";
import styles from "@/components/main/addFolder/addFolder.module.css";
import { clickedFolderContextUpdater } from "..";

export default function DeleteLink({ editState, onClick, links }) {
  const [isOpen, setIsopen] = useState(false);
  const { setClickedFolderList } = useContext(clickedFolderContextUpdater);
  const handleClick = (ismodalOpen) => {
    setIsopen(ismodalOpen);
    onClick(editState);
  };
  const handleEditMode = () => {
    setClickedFolderList([]);
    onClick(!editState);
  };
  return (
    <div className={styles.addFolder}>
      <div className={styles.addFolderWrapper}>
        {editState ? (
          <div className={styles.buttonWrapper}>
            <button onClick={handleClick} className={styles.text}>
              링크 삭제
            </button>
            <button onClick={handleEditMode} className={styles.text}>
              수정 최소하기
            </button>
          </div>
        ) : (
          <button onClick={handleEditMode} className={styles.text}>
            링크 수정하기
          </button>
        )}
      </div>
      <PopUpMessage
        component={<DeleteLinkModal isModalOpen={setIsopen} onClick={onClick} links={links} />}
        modalOpen={isOpen}
        onClick={handleClick}
      />
    </div>
  );
}
