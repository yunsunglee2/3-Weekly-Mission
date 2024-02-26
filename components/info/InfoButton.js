import styles from "./button.module.css";

const InfoButton = ({ width, height, children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        className={styles.infoButton}
      >
        {children}
      </button>
    </>
  );
};

export default InfoButton;
