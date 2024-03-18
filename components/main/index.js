import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainSearch from "@/components/main/MainSearch.js";
import Links from "@/components/main/MainFiles.js";
import { Buttons } from "@/components/main/buttons.js";
import Fnc from "@/components/main/fnc.js";
import AddFolder from "@/components/main/addFolder";
import { EmptyFile } from "@/components/main/emptyFile.js";
import styles from "./main.module.css";
import SHARE_IMG from "@/public/shareImg.svg";
import DELETE_IMG from "@/public/deleteImg.svg";
import CHANGE_IMG from "@/public/changeName.svg";

function Main({ links, folders, page }) {
  const router = useRouter();
  const [currentFolder, setCurrentFolder] = useState({
    id: 1,
    name: "전체",
  });
  const [search, setSearch] = useState("");
  let filteredLinks = links;

  // const getFilteredLink = async (id) => {
      
  //   const filteredLinks = links.filter((info) => {
  //       return (
  //         info.url?.toLowerCase().includes(search.toLowerCase()) ||
  //         info.title?.toLowerCase().includes(search.toLowerCase()) ||
  //         info.description?.toLowerCase().includes(search.toLowerCase())
  //       );
  //     });
  // };

  
  const getFilteredLink = () => {    
    if(currentFolder.id === 1) {
      filteredLinks = links
    } else {
      filteredLinks = links.filter((link)=> link.id === currentFolder.id)
    }
    return filteredLinks
  } 
  
  useEffect(() => {
    getFilteredLink(currentFolder.id);
  }, [search]);

  const handleClickFolder = (folder) => {
    setCurrentFolder(folder);
    getFilteredLink(folder.id);
    router.push(`/${page}/${folder.id}`)
  };

  return (
    <div className={styles.Main}>
      <div className={styles.box}>
        <div className={styles.item01}>
          {/* 검색 바 입니다 */}
          <MainSearch setSearch={setSearch} />
        </div>
        <div className={styles.item02}>
          <div className={styles.fileList}>
            <div className={styles.buttonBundle}>
              <button
                className={styles.listAllButton}
                onClick={() => handleClickFolder({ id: 'all', name: "전체" })}
              >
                <div className={styles.text}>{"전체"}</div>
              </button>
              {/* 버튼 목록 입니다 */}
              <Buttons onClick={handleClickFolder} folders={folders} />
            </div>
            {/* 폴더 목록 우측 플러스 버튼 입니다  */}
            <div className={styles.addFolderWrapper}>
              <span className={styles.text}>폴더 추가</span>
              <AddFolder />
            </div>
          </div>
          <div className={styles.functionBundle}>
            <div className={styles.currentFolder}>{currentFolder.name}</div>
            {currentFolder.name !== "전체" && (
              <div className={styles.fncBtn}>
                <Fnc src={SHARE_IMG} value="공유" />
                <Fnc src={CHANGE_IMG} value="이름변경" />
                <Fnc src={DELETE_IMG} value="삭제" />
              </div>
            )}
          </div>
          {/* 링크가 존재하면 링크 목록을 보여주고 없으면 비었음을 출력해주는 조건부 렌더링  */}
          {links ? <Links links={filteredLinks} /> : <EmptyFile />}
        </div>
      </div>
    </div>
  );
}

export default Main;
