import { useState, useRef } from "react";
import React from "react";
import Image from "next/image";
import LINKIMAGE from "@/public/link.svg";
import PopupMessage from "@/components/modal/modal";
import AddLinkModal from "@/components/modal/addLink/addLinkModal";
import styles from "./AddInput.module.css";

export default function AddInput() {
  const [inputValue, setInputValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const inputRef = useRef();

  const handlePopupMessage = () => {
    inputRef.current.value ? setModalOpen(!modalOpen) : alert("링크를 추가해주세요");
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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className={styles.button} onClick={handlePopupMessage}>
            <span className={styles.text}>추가하기</span>
          </button>
          <PopupMessage
            modalOpen={modalOpen}
            onClick={isClose}
            component={<AddLinkModal />}
          />
        </div>
      </div>
    </div>
  );
}
