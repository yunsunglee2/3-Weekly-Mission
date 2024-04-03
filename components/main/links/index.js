import styles from "./mainFiles.module.css";
import LinkItem from "./link";

export default function Links({ links }) {
  return (
    <div className={styles.files}>
      {links.map((link) => (
        <LinkItem key={link.id} linkId={link.id} link={link} />
      ))}
    </div>
  );
}
