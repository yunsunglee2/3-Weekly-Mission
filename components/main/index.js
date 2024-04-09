import { useState, useEffect, useContext, createContext } from "react";
import { useRouter } from "next/router";
import Search from "./search";
import Links from "./links";
import Buttons from "@/components/main/buttons/index";
import Fnc from "./fnc";
import AddFolder from "./addFolder";
import { EmptyFile } from "./emptyFile";
import styles from "./main.module.css";
import SHARE_IMG from "@/public/shareImg.svg";
import DELETE_IMG from "@/public/deleteImg.svg";
import CHANGE_IMG from "@/public/changeName.svg";
import { TokenContextUpater } from "@/components/providers/authProvider";
import DeleteLink from "./deleteLink";

export const clickedFolderContext = createContext();
export const clickedFolderContextUpdater = createContext();
export const editModeContext = createContext();

export function Main({ accessToken, links, folders }) {
  const [clickedFolderList, setClickedFolderList] = useState([]);
  const [isEditMode, setEditMode] = useState(false);
  const router = useRouter();
  const { folderId } = router.query;
  const [currentFolder, setCurrentFolder] = useState({
    id: folderId,
    name: "전체",
  });
  const [search, setSearch] = useState("");
  const [filteredLinks, setFilterdLinks] = useState(links);

  // props 로 받은 accessToken 으로 token을 업데이트 해줍니다
  let { setToken } = useContext(TokenContextUpater);
  
  const getSearcedLink = () => {
    const currentFilteredLinks = links.filter(
      (link) =>
        link.url?.toLowerCase().includes(search.toLowerCase()) ||
        link.title?.toLowerCase().includes(search.toLowerCase()) ||
        link.description?.toLowerCase().includes(search.toLowerCase())
    );
    setFilterdLinks(currentFilteredLinks);
  };

  useEffect(()=> {
    setToken(accessToken);
  },[])

  useEffect(() => {
    getSearcedLink();
  }, [search]);

  useEffect(() => {
    setFilterdLinks(links);
  }, [links, currentFolder]);

  const handleClickFolder = (folder) => {
    setCurrentFolder(folder);
    router.push(`${folder.id}`);
  };
  return (
    <editModeContext.Provider value={{ isEditMode }}>
      <clickedFolderContext.Provider value={{ clickedFolderList }}>
        <clickedFolderContextUpdater.Provider value={{ setClickedFolderList }}>
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
                      onClick={() => handleClickFolder({ id: 0, name: "전체" })}
                    >
                      <div className={styles.text}>{"전체"}</div>
                    </button>
                    {/* 폴더 목록 입니다 */}
                    <Buttons onClick={handleClickFolder} folders={folders} />
                  </div>
                  {/* 폴더 목록 우측 플러스 버튼 입니다  */}
                  <div className={styles.addFolderWrapper}>
                    <AddFolder />
                    <DeleteLink
                      links={filteredLinks}
                      editState={isEditMode}
                      onClick={setEditMode}
                    />
                  </div>
                </div>
                <div className={styles.functionBundle}>
                  <div className={styles.currentFolder}>
                    {currentFolder.name}
                  </div>
                  {currentFolder.name !== "전체" && (
                    <div className={styles.fncBtn}>
                      <Fnc folderId={folderId} src={SHARE_IMG} value="공유" />
                      <Fnc
                        folderId={folderId}
                        src={CHANGE_IMG}
                        value="이름변경"
                      />
                      <Fnc
                        folderId={folderId}
                        src={DELETE_IMG}
                        value="삭제"
                        currentFolderName={currentFolder.name}
                      />
                    </div>
                  )}
                </div>
                {/* 링크가 존재하면 링크 목록을 보여주고 없으면 비었음을 출력해주는 조건부 렌더링  */}

                {filteredLinks.length ? (
                  <Links links={filteredLinks} />
                ) : (
                  <EmptyFile />
                )}
              </div>
            </div>
          </div>
        </clickedFolderContextUpdater.Provider>
      </clickedFolderContext.Provider>
    </editModeContext.Provider>
  );
}
