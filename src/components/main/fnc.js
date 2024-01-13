import { useState } from "react"
import PopupMessage from "../modal/modal";
import ShareModal from '../modal/shareModal';

export default function Fnc({value}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = (value) => {
    setIsModalOpen(value); 
  }
  return (
    <div className="Fnc">
      <div className="text" onClick={handleClick}>{value}</div>
      <PopupMessage component={<ShareModal />} modalOpen={isModalOpen} onClick={handleClick}/>
    </div>

  )
}