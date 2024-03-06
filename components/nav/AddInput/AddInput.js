import { useState, useRef } from "react";
import React from "react";
import Image from "next/image";
import LINKIMAGE from "@/public/link.svg";
import PopupMessage from "@/components/modal/modal";
import AddFolderModal from "@/components/modal/addLinkModal";
import styles from './AddInput.module.css';

export default function AddInput() {
  const [modalOpen, setModalOpen] = useState(false);

  const inputRef = useRef();
  const inputNode = inputRef.current;

  const handlePopupMessage = () => {
    inputNode.value ? setModalOpen(!modalOpen) : alert('링크를 추가해주세요');
  };
  const isClose = (value) => {
    setModalOpen(value);
  };

  return (
    <div className={styles.AddInput}>
      <div className={styles.wrapper}>
        <div className={styles.AddInputFnc}>
          <Image width={20} height={20} src={LINKIMAGE} alt="LINKIMAGE" />
          <input
            className={styles.input}
            type="text"
            placeholder="링크를 추가해 보세요"
            ref={inputRef}
          />
          <button className={styles.button} onClick={handlePopupMessage}>
            <span className={styles.text}>추가하기</span>
          </button>
          <PopupMessage
            modalOpen={modalOpen}
            onClick={isClose}
            component={<AddFolderModal />}
          />
        </div>
      </div>
    </div>
  );
}
