import Modal from 'react-modal';
import CLOSE_IMG from '../../assets/close.svg';

const customImgStyle = {
  width: "24px",
  height: "24px",
  position: "absolute",
  top: "4%",
  right: "4%",
}

const customModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "300px",
    height: "300px",
    overflow: "visible",
    zIndex: "150",
    position: "absolute",
    top: "20%",
    left: "35%",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    padding: "32px 40px",
  },
};

const PopupMessage = ({modalOpen, onClick, component}) => {
  const handleClick = () => {
    onClick(false);
  }
  return (
    <Modal
      isOpen={modalOpen} 
      onRequestClose={()=>handleClick()}
      contentLabel='' 
      style={customModalStyles}
  > 
  {component}
  <img  className="closeImg" src={CLOSE_IMG} alt="" style={customImgStyle} onClick={handleClick}/>
  </Modal>
  )
}

export default PopupMessage;