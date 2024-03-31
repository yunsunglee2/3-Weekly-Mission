import { useState } from "react";
import PopupMessage from "@/components/modal/modal";
import ShareModal from "@/components/modal/shareModal";
import ChangeNameModal from "@/components/modal/changeNameModal";
import DeleteModal from "@/components/modal/deleteModal";
import styles from "@/components/main/fnc.module.css";
import Image from "next/image";

export default function Fnc({ value, src }) {
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
        <PopupMessage
          component={<DeleteModal />}
          modalOpen={isModalOpen}
          onClick={handleClick}
        />
      ) : `${value}` === "공유" ? (
        <PopupMessage
          component={<ShareModal />}
          modalOpen={isModalOpen}
          onClick={handleClick}
        />
      ) : (
        <PopupMessage
          component={<ChangeNameModal />}
          modalOpen={isModalOpen}
          onClick={handleClick}
        />
      )}
    </div>
  );
}
