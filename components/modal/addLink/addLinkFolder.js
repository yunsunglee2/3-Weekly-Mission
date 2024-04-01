import Image from "next/image";
import CHECKIMG from "@/public/check.svg";
import styles from "@/components/modal/addLink/addLinkModal.module.css";

function Folder({ title, linksCount }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.folder} onClick={handleClick}>
      {isChecked && (
        <Image className={styles.check} src={CHECKIMG} alt="checkImage" />
      )}
      <div className={styles.textBundle}>
        <div className={styles.title}>{title}</div>
        <div className={styles.linksCount}>{linksCount}</div>
      </div>
    </div>
  );
}

export default Folder;
