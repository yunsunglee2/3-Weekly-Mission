import Modal from 'react-modal';
import Image from "next/image";
import { customImgStyle, customModalStyles } from './modalStyledComponents';

const PopUpMessage = ({modalOpen, onClick, component}) => {
  const handleClick = () => {
    onClick(!modalOpen);
  }
  return (
    <Modal
      isOpen={modalOpen} 
      onRequestClose={handleClick}
      contentLabel='' 
      style={customModalStyles}
  > 
  {component}
  <Image className="closeImg" src={'/CLOSE_IMG'} alt="x" style={customImgStyle} onClick={handleClick}/>
  </Modal>
  )
}

export default PopUpMessage;