import styles from "./buttons.module.css";

function Button({ folder, onClick }) {
    const handleClick = () => onClick(folder);
    return (
      <button onClick={handleClick} className={styles.button}>
        {folder.name}
      </button>
    );
  }

  export default Button;
