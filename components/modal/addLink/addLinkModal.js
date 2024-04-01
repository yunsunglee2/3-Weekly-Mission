import styles from "@/components/modal/addLink/addLinkModal.module.css";
import Titles from "./addLinkTitle";
import Folders from "./addLinkFolders";
import { useContext } from "react";
import { FoldersContext } from "@/components/providers/foldersProvider";
import { addLink } from "@/components/api/Api";
import { checkFolderContext } from "./addLinkProvider";

export default function AddLinkModal() {
  let { folders } = useContext(FoldersContext);
  let { checkedFolder } = useContext(checkFolderContext);
  console.log(checkedFolder);
  // const handleClick = () => {
  //   addLink(url, folderId);
  // };

  return (
      <div className={styles.AddLinkModal}>
        <Titles title={"폴더에 추가"} subtitle={"링크주소"} />
        <div className={styles.folderList}>
          <Folders folders={folders}></Folders>
        </div>
        <button className={styles.button}>
          <span className={styles.text}>추가하기</span>
        </button>
      </div>
  );
}
