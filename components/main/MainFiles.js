import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import More from "@/components/main/more.js";
import TimeAgo from "@/components/main/MainFileTimeAgo.js";
import STAR_OFF from "@/public/star.svg";
import STAR_ON from "@/public/starOn.svg";
import KEBAB_IMAGE from "@/public/kebab.svg";
import TEMP_IMAGE from "@/public/logo.svg";
import styles from "./mainFiles.module.css";

function Link({ link }) {
  const { created_at, url, title, description, image_source } = link;
  const [kebabLoad, setKebabLoad] = useState(false);
  const [light, setLight] = useState(false);
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
    setLight(!light);
  };

  year = new Date(created_at).getFullYear();
  month = new Date(created_at).getMonth();
  date = new Date(created_at).getDate();
  editedTime = year + "-" + (month + 1) + "-" + date;

  return (
    <div className={styles.MainFiles}>
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
        <div className={styles.item01} onClick={handleClick}>
          <Image
            className={styles.thumbnail}
            fill
            style={{
              objectFit: "cover",
            }}
            src={image_source === null ? TEMP_IMAGE : image_source}
            alt={title}
          />
        </div>
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

export default function Links({ links }) {
  return (
    <div className={styles.files}>
      {links.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
}
