import { useState } from "react";
import addImage from "@/public/add.svg";
import PopupMessage from "@/components/modal/modal.js";
import AddFolderModal from "@/components/modal/addFolderModal.js";

export default function AddFolder() {
  const [isOpen, setIsopen] = useState(false);
  const handleClick = () => {
    setIsopen(!isOpen);
  };
  const isClose = (value) => {
    setIsopen(value);
  };

  return (
    <div className="AddFolder" onClick={handleClick}>
      <img src={addImage} alt="" />
      <PopupMessage
        modalOpen={isOpen}
        onClick={isClose}
        component={<AddFolderModal />}
      />
    </div>
  );
}