import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Search from "./search";
import Links from "./links";
import { Buttons } from "./buttons";
import Fnc from "./fnc";
import AddFolder from "./addFolder";
import { EmptyFile } from "./emptyFile";
import styles from "./main.module.css";
import SHARE_IMG from "@/public/shareImg.svg";
import DELETE_IMG from "@/public/deleteImg.svg";
import CHANGE_IMG from "@/public/changeName.svg";
import { TokenContextUpater } from "@/components/providers/authProvider";

function Main({ accessToken, links, folders }) {
  let { setToken } = useContext(TokenContextUpater);
  const router = useRouter();
  const { folderId } = router.query;
  const [currentFolder, setCurrentFolder] = useState({
    id: 1,
    name: "전체",
  });
  const [search, setSearch] = useState("");
  let filteredLinks = links;
  setToken(accessToken);

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
    if (currentFolder.id === 1) {
      filteredLinks = links;
    } else {
      filteredLinks = links.filter((link) => link.id === currentFolder.id);
    }
    return filteredLinks;
  };

  useEffect(() => {
    getFilteredLink(currentFolder.id);
  }, [search]);

  const handleClickFolder = (folder) => {
    setCurrentFolder(folder);
    getFilteredLink(folder.id);
    router.push(`${folder.id}`);
  };

  return (
    <div className={styles.Main}>
      <div className={styles.box}>
        <div className={styles.item01}>
          {/* 검색 바 입니다 */}
          <Search setSearch={setSearch} />
        </div>
        <div className={styles.item02}>
          <div className={styles.fileList}>
            <div className={styles.buttonBundle}>
              <button
                className={styles.listAllButton}
                onClick={() => handleClickFolder({ id: "all", name: "전체" })}
              >
                <div className={styles.text}>{"전체"}</div>
              </button>
              {/* 폴더 목록 입니다 */}
              <Buttons onClick={handleClickFolder} folders={folders} />
            </div>
            {/* 폴더 목록 우측 플러스 버튼 입니다  */}
            <div className={styles.addFolderWrapper}>
              <AddFolder />
            </div>
          </div>
          <div className={styles.functionBundle}>
            <div className={styles.currentFolder}>{currentFolder.name}</div>
            {currentFolder.name !== "전체" && (
              <div className={styles.fncBtn}>
                <Fnc folderId={folderId} src={SHARE_IMG} value="공유" />
                <Fnc folderId={folderId} src={CHANGE_IMG} value="이름변경" />
                <Fnc folderId={folderId} src={DELETE_IMG} value="삭제" />
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
