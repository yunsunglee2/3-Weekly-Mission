import { useState } from "react";
import DeleteModal from "@/components/modal/deleteModal";
import AddFolderModal from "@/components/modal/addFolderModal";
import PopupMessage from "@/components/modal/modal";

export default function More({ folder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");

  const handleClick = (e) => {
    setIsOpen(!isOpen);
    setModal(e.target.innerHTML);
  };
  const handlePopupMessage = (value) => {
    setIsOpen(value);
  };
  return (
    <div className="More">
      <span className="text" onClick={handleClick}>
        추가하기
      </span>
      <span className="text" onClick={handleClick}>
        삭제하기
      </span>
      {
        <PopupMessage
          modalOpen={isOpen}
          onClick={handlePopupMessage}
          component={
            modal === "추가하기" ? (
              <AddFolderModal folder={folder} isSubtext={true} />
            ) : (
              <DeleteModal />
            )
          }
        />
      }
    </div>
  );
}