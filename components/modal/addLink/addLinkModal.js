import { useState, useEffect } from "react";
import { getMyFolders } from "@/components/api/Api.js";
import styles from '@/components/modal/addLink/addLinkModal.module.css'
import Titles from "./addLinkTitle";
import Folders from "./addLinkFolders";

export default function AddLinkModal() {
  const [data, setData] = useState([]);

  const getFolders = async () => {
    const { data } = await getMyFolders();
    setData(data);
  };

  useEffect(() => {
    getFolders();
  }, []);

  return (
    <div className={styles.AddLinkModal}>
      <Titles title={"폴더에 추가"} subtitle={"링크주소"} />
      <div className={styles.folderList}>
        <Folders folders={data}></Folders>
      </div>
      <div className={styles.button}>
        <span className={styles.text}>추가하기</span>
      </div>
    </div>
  );
}
