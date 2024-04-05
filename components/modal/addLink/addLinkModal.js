import styles from "@/components/modal/addLink/addLinkModal.module.css";
import Titles from "./addLinkTitle";
import Folders from "./addLinkFolders";
import { useContext } from "react";
import { FoldersContext } from "@/components/providers/foldersProvider";
import { addLink } from "@/components/api/Api";
import { checkFolderListContext } from "./addLinkProvider";
import { TokenContext } from "@/components/providers/authProvider";
import { useRouter } from "next/router";

export default function AddLinkModal({ onClick, url }) {
  let { folders } = useContext(FoldersContext);
  let { checkedFolderList } = useContext(checkFolderListContext);
  let { token } = useContext(TokenContext);
  const router = useRouter();

  // 클릭된 폴더 리스트 순회하며 POST 처리
  const handleClick = () => {
    onClick(false);
    checkedFolderList.map((checkedFolderId) =>
      addLink(url, checkedFolderId, token)
    );
    router.push("/shared/0");
  };

  return (
    <div className={styles.AddLinkModal}>
      <Titles title={"폴더에 추가"} subtitle={"링크주소"} />
      <div className={styles.folderList}>
        <Folders folders={folders}></Folders>
      </div>
      <button className={styles.button} onClick={handleClick}>
        <span className={styles.text}>추가하기</span>
      </button>
    </div>
  );
}
