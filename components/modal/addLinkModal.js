import { useState, useEffect } from "react";
import Image from "next/image";
import CHECKIMG from "@/public/check.svg";
import { getMyFolders } from "@/components/api/Api.js";
import styles from './addLinkModal.module.css';

function Titles({ title, subtitle }) {
  return (
    <div className={styles.titles}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subtitle}</div>
    </div>
  );
}

// --------------------------------------------------------------------------------

function Folder({ title, linksCount }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.folder} onClick={handleClick}>
      {isChecked && <Image className={styles.check} src={CHECKIMG} alt="checkImage" />}
      <div className={styles.textBundle}>
        <div className={styles.title}>{title}</div>
        <div className={styles.linksCount}>{linksCount}</div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------------

function Folders({ folders }) {
  return (
    <div className={styles.Folders}>
      {folders.map((folder) => {
        return (
          <Folder
            key={folder.id}
            title={folder.name}
            linksCount={folder.link.count}
          ></Folder>
        );
      })}
    </div>
  );
}

// --------------------------------------------------------------------------------

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
