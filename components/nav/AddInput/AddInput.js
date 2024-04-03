import { useState, useRef, useContext } from "react";
import React from "react";
import Image from "next/image";
import PopUpMessage from "@/components/modal/UI/popUpMessage";
import AddLinkModal from "@/components/modal/addLink/addLinkModal";
import styles from "./AddInput.module.css";
import { AddLinkProvier } from "@/components/modal/addLink/addLinkProvider";

export default function AddInput() {
  const [inputValue, setInputValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const inputRef = useRef();

  // 링크 형식만 입력 가능하게 조건 생성
  const handlePopupMessage = () => {
  if (inputRef.current.value.match(/^https?:\/\/.+/)) {
    setModalOpen(!modalOpen);
  } else {
    alert("링크 형식으로 입력해주세요");
  }
};


  const isClose = (value) => {
    setModalOpen(value);
  };

  return (
    <div className={styles.AddInput}>
      <div className={styles.wrapper}>
        <div className={styles.AddInputFnc}>
          <Image width={20} height={20} src={'/link.svg'} alt="LINKIMAGE" />
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
          <AddLinkProvier>
            <PopUpMessage
              modalOpen={modalOpen}
              onClick={isClose}
              component={<AddLinkModal onClick={setModalOpen} url={inputValue} />}
            />
          </AddLinkProvier>
        </div>
      </div>
    </div>
  );
}
