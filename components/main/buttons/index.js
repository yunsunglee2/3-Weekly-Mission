import styles from "./buttons.module.css";
import Button from "./button";

function Buttons({ folders, onClick }) {
  return (
    <div className={styles.buttons}>
      {folders?.map((folder) => (
          <Button key={folder.id} folder={folder} onClick={onClick} />
      ))}
    </div>
  );
}

export default Buttons;
