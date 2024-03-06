import styles from "./Button.module.css";

function Button({ className, children, onClick }) {
  return (
    <div className={[styles.button, `${className}`].join(' ')} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
