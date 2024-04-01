import styles from "./mainFiles.module.css";
import Link from "./link";

export default function Links({ links }) {
  return (
    <div className={styles.files}>
      {links.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
}
