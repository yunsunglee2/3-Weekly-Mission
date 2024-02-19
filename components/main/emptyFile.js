import styles from "./emptyFile.module.css";

export function EmptyFile() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.emptyFile}>저장된 링크가 없습니다.</span>
    </div>
  );
}
