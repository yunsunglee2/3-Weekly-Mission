import 'components/modal/addFolderModal.css';
import { useState, useEffect } from 'react';
import CHECKIMG from "assets/check.svg";
import { getMyFolders } from 'components/main/api/Api.js';

function Titles({title, subtitle}) {
  return (
    <div className="titles">
        <div className="title">{title}</div>
        <div className="subTitle">{subtitle}</div>
      </div>
  )
}

// --------------------------------------------------------------------------------

  function Folder({title, linksCount}) {
    const [isChecked, setIsChecked] = useState(false);
    const handleClick = () => {
       setIsChecked(!isChecked);
    }
    return (
      <div className={"folder"} onClick={handleClick} >
      {isChecked && <img className='check' src={CHECKIMG} alt="" />}
        <div className="textBundle">
          <div className="title">{title}</div>
          <div className="linksCount">{linksCount}</div>
        </div>
        </div>
    )
  }

// --------------------------------------------------------------------------------

function Folders({folders}) {
  return (
    <div className="Folders">
      {folders.map((folder) => {
        return <Folder title={folder.name} linksCount={folder.link.count}></Folder>
      })}
    </div>
  )
}

// --------------------------------------------------------------------------------

export default function AddFolderModal() {
  const [data, setData] = useState([]);

  const getFolders = async () => {
    const {data} = await getMyFolders();
    setData(data);
  }
  
  useEffect(()=>{
   getFolders();
  },[])

  return (
    <div className="AddFolderModal">
      <Titles title={"폴더에 추가"} subtitle={"링크주소"}/>
      <div className="folderList">
        <Folders folders={data} ></Folders>
      </div>
      <div className="button">
        <span className="text">추가하기</span>
      </div>
    </div>
  )
};