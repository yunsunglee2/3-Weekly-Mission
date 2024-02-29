import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import More from "@/components/main/more.js";
import TimeAgo from "@/components/main/MainFileTimeAgo.js";
import STAR_IMAGE from "@/public/star.svg";
import KEBAB_IMAGE from "@/public/kebab.svg";
import TEMP_IMAGE from "@/public/logo.svg";
import styles from "./mainFiles.module.css";

function File({ file }) {
  const { created_at, url, title, description, image_source } = file;
  const [kebabLoad, setKebabLoad] = useState(false);
  const starRef = useRef();

  let year;
  let month;
  let date;
  let editedTime;

  useEffect(() => {
    setKebabLoad(false);
  }, []);

  const handleClick = () => {
    window.open(url, "_blank");
  };

  const handleKebab = () => {
    setKebabLoad(!kebabLoad);
  };

  const handleLight = () => {
    starRef.current.classList.toggle('starOn');
  };

  year = new Date(created_at).getFullYear();
  month = new Date(created_at).getMonth();
  date = new Date(created_at).getDate();
  editedTime = year + "-" + (month + 1) + "-" + date;

  return (
    <div className={styles.MainFiles}>
      <div className={styles.File}>
            <Image
              ref={starRef}
              className={styles.starOff}
              width={20}
              height={20}
              src={STAR_IMAGE}
              alt="즐겨찾기 추가하기"
              onClick={handleLight}
            />
        <div className={styles.item01} onClick={handleClick}>
          <Image
            className={styles.thumbnail}
            fill
            style={{
              objectFit: "contain",
            }}
            src={image_source === null ? TEMP_IMAGE : image_source}
            alt={title}
          />
        </div>
        <div className={styles.item02}>
          <Image
            className={styles.kebab}
            src={KEBAB_IMAGE}
            alt="더보기"
            onClick={handleKebab}
          />
          <TimeAgo className={styles.timeAgo} time={created_at} />
          <div className={styles.description}>{description}</div>
          <div className={styles.editTime}>{editedTime}</div>
          {kebabLoad && <More folder={file.title} />}
        </div>
      </div>
    </div>
  );
}

export default function MainFiles({ folders }) {
  return (
    <div className={styles.files}>
      {folders.map((folder) => (
        <File key={folder.id} file={folder} />
      ))}
    </div>
  );
}
