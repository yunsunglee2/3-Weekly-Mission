import Modal from "react-modal";
import Image from "next/image";
import { customImgStyle, customModalStyles } from "./modalStyledComponents";

const PopUpMessage = ({ modalOpen, onClick, component }) => {
  const handleClick = () => {
    onClick(!modalOpen);
  };
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={handleClick}
      contentLabel=""
      style={customModalStyles}
    >
      {component}
      <Image
        width={24}
        height={24}
        className="closeImg"
        src={"/close.svg"}
        alt="close"
        style={customImgStyle}
        onClick={handleClick}
      />
    </Modal>
  );
};

export default PopUpMessage;
