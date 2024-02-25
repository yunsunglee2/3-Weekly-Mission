import styles from "./Button.module.css";

function Button({ children, onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
