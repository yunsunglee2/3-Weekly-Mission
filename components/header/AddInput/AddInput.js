import LINKIMAGE from "assets/link.svg";
import { useState, useRef } from "react";
import React from "react";
import PopupMessage from "components/modal/modal";
import AddFolderModal from "components/modal/addLinkModal";

export default function AddInput() {
  const [modalOpen, setModalOpen] = useState(false);

  const inputRef = useRef();
  const inputNode = inputRef.current;

  const handlePopupMessage = () => {
    inputNode.value && setModalOpen(!modalOpen);
  };
  const isClose = (value) => {
    setModalOpen(value);
  };

  return (
    <div className="AddInput">
      <div className="AddInput-input">
        <div className="AddInput-fnc">
          <img src={LINKIMAGE} alt="" />
          <input
            type="text"
            placeholder="링크를 추가해 보세요"
            ref={inputRef}
          />
          <button onClick={handlePopupMessage}>
            <span className="text">추가하기</span>
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
