import { useEffect, useState } from "react";
import MainSearch from "@/components/main/MainSearch.js";
import MainFiles from "@/components/main/MainFiles.js";
import { getLinks, getMyFolders } from "@/components/main/api/Api.js";
import { Buttons } from "@/components/main/buttons.js";
import Fnc from "@/components/main/fnc.js";
import AddFolder from "@/components/main/addFolder";
import { EmptyFile } from "@/components/main/emptyFile.js";
import "@/components/main/main.css";

function Main() {
  const [links, setLinks] = useState([]);
  const [currentFolder, setCurrentFolder] = useState({id: null, name: '전체'});
  const [names, setNames] = useState([]);

  const getFolders = async (id) => {                      // 폴더 안에 파일들 받아오기
    const { data } = await getLinks(id);
    console.log(data)
    setLinks(data);
  };

  const getFolderList = async () => {                     // url에서 폴더 목록 받아오기
    const { data } = await getMyFolders();
    setNames(data);
  };
  
  useEffect(() => {
    getFolderList();
  }, []);
  
  useEffect(()=>{
    getFolders(currentFolder.id);
  }, [currentFolder]);

  const handleClickFolder = (folder) => {
    setCurrentFolder(folder);
  }

  return (
    <div className="Main">
      <div className="box">
        <div className="item01">
          <MainSearch />
        </div>
        <div className="item02">
          <div className="fileList">
            <div className="buttonBundle">
              <button className="list-all-button" onClick={() => handleClickFolder({ id: null, name: '전체' })}>
                <div className="text">{"전체"}</div>
              </button>
              <Buttons onClick={handleClickFolder} folders={names} />
            </div>
            <AddFolder/>
          </div>
          <div className="functionBundle">
          <div>{currentFolder.name}</div>
            {currentFolder.name !== "전체" && 
            <div className="fnc-btn">
              <Fnc value="공유" />
              <Fnc value="이름변경" />
              <Fnc value="삭제" />
            </div>}
          </div>
          {links.length === 0 ? <EmptyFile /> : <MainFiles folders={links} /> }
        </div>
      </div>
    </div>
  );
}

export default Main;
