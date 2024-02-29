import Image from "next/image";
import "@/components/modal/shareModal.module.css";
import KAKAO from "@/public/kakao.svg";
import FACEBOOK from "@/public/Facebook.svg";
import COPYLINK from "@/public/copylink.svg";
import styles from './shareModal.module.css';

function Share({ src, text }) {
  return (
    <div className={styles.share}>
      <div className={styles.link}>
          <div className={styles.dumy}>
            <Image src={src} alt="icon" />
          </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}

export default function ShareModal() {
  return (
    <div className={styles.ShareModal}>
      <div className={styles.titles}>
        <div className={styles.title}>폴더공유</div>
        <div className={styles.subTitle}>폴더명</div>
      </div>
      <div className={styles.shares}>
        <Share className={styles.kakao} src={KAKAO} text="kakao" />
        <Share className={styles.facebook} src={FACEBOOK} text="facebook" />
        <Share className={styles.copy} src={COPYLINK} text="copylink" />
      </div>
    </div>
  );
}
