import { useEffect, useState } from "react";
import MainSearch from "@/components/main/MainSearch.js";
import MainFiles from "@/components/main/MainFiles.js";
import { getLinks, getMyFolders } from "@/components/api/Api.js";
import { Buttons } from "@/components/main/buttons.js";
import Fnc from "@/components/main/fnc.js";
import AddFolder from "@/components/main/addFolder";
import { EmptyFile } from "@/components/main/emptyFile.js";
import styles from "./main.module.css";

function Main() {
  const [links, setLinks] = useState([]);
  const [currentFolder, setCurrentFolder] = useState({
    id: null,
    name: "전체",
  });
  const [names, setNames] = useState([]);
  const [search, setSearch] = useState('');

  const getFolders = async (id) => {
    // 폴더 안에 파일들 받아오기
    const { data } = await getLinks(id);
    console.log(data);
    setLinks(data);
  };

  const getFolderList = async () => {
    // url에서 폴더 목록 받아오기
    const { data } = await getMyFolders();
    setNames(data);
  };

  const getFilteredLink = async (id) => {
    try {
      const { data } = await getLinks(id);
      const filteredData = data.filter((info) => {
        return (
          info.url?.toLowerCase().includes(search.toLowerCase()) ||
          info.title?.toLowerCase().includes(search.toLowerCase()) ||
          info.description?.toLowerCase().includes(search.toLowerCase())
        );
      });
      if (!search) {
        setLinks(data);
      } else if (search) {
        setLinks(filteredData);
      }
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  useEffect(() => {
    getFolderList();
  }, []);

  useEffect(() => {
    getFolders(currentFolder.id);
  }, [currentFolder]);

  useEffect(() => {
    getFilteredLink(currentFolder.id);
  }, [search]);

  const handleClickFolder = (folder) => {
    setCurrentFolder(folder);
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
                onClick={() => handleClickFolder({ id: null, name: "전체" })}
              >
                <div className={styles.text}>{"전체"}</div>
              </button>
              {/* 버튼 목록 입니다 */}
              <Buttons onClick={handleClickFolder} folders={names} />
            </div>
            {/* 폴더 목록 우측 플러스 버튼 입니다  */}
            <AddFolder />
          </div>
          <div className={styles.functionBundle}>
            <div>{currentFolder.name}</div>
            {currentFolder.name !== "전체" && (
              <div className={styles.fncBtn}>
                <Fnc value="공유" />
                <Fnc value="이름변경" />
                <Fnc value="삭제" />
              </div>
            )}
          </div>
          {/* 링크가 존재하면 링크 목록을 보여주고 없으면 비었음을 출력해주는 조건부 렌더링  */}
          {links.length === 0 ? <EmptyFile /> : <MainFiles folders={links} />}
        </div>
      </div>
    </div>
  );
}

export default Main;
