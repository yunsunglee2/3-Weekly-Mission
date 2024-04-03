import { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import More from "../more";
import TimeAgo from "../timeAgo";
import STAR_OFF from "@/public/star.svg";
import STAR_ON from "@/public/starOn.svg";
import styles from "./mainFiles.module.css";
import Link from "next/link";
import { clickedFolderContextUpdater, editModeContext } from "..";
import { clickedFolderContext } from "..";

function LinkItem({ link, linkId }) {
  const { created_at, url, title, description, image_source } = link;
  const [kebabLoad, setKebabLoad] = useState(false);
  const [light, setLight] = useState(false);
  const starRef = useRef();
  const { setClickedFolderList } = useContext(clickedFolderContextUpdater);
  const { clickedFolderList } = useContext(clickedFolderContext);
  const { isEditMode } = useContext(editModeContext);

  const handleClick = () => {
    if (isEditMode) {
      setClickedFolderList([...clickedFolderList, linkId]);
    }
  };

  let year;
  let month;
  let date;
  let editedTime;

  useEffect(() => {
    setKebabLoad(false);
  }, []);

  const handleKebab = () => {
    setKebabLoad(!kebabLoad);
  };

  const handleLight = () => {
    setLight(!light);
  };

  year = new Date(created_at).getFullYear();
  month = new Date(created_at).getMonth();
  date = new Date(created_at).getDate();
  editedTime = year + "-" + (month + 1) + "-" + date;

  return (
    <div className={styles.MainFiles} onClick={handleClick}>
      <div className={styles.File}>
        <Image
          className={styles.star}
          ref={starRef}
          width={30}
          height={30}
          src={light ? STAR_ON : STAR_OFF}
          alt="즐겨찾기 추가하기"
          onClick={handleLight}
        />
        <Link href={url} target="_blank">
          <div className={styles.item01}>
            <Image
              alt={title}
              className={styles.thumbnail}
              fill
              style={{
                objectFit: "contain",
              }}
              src={image_source === null ? "/defaultImage.png" : image_source}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </Link>
        <div className={styles.item02}>
          <div className={styles.wrapper}>
            <Image
              className={styles.kebab}
              width={16}
              height={16}
              src="/kebab.svg"
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
    </div>
  );
}

export default LinkItem;
