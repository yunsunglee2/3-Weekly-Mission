import { useState } from "react";
import styles from "./input.module.css";

const InfoInput = ({
  ref,
  size,
  setValue,
  value,
  name,
  placeholder = "",
  err = "",
  handleErr,
  handleChange
}) => {

  const handleOnchange = (e) => {
    handleChange(e.target.name, e.target.value)
  };

  const handleBlur = (e) => {
    handleErr(e.target.name);
  };

  return (
    <div className={styles.wrapper}>
      <input
        name={name}
        ref={ref}
        value={value}
        onChange={handleOnchange}
        onBlur={handleBlur}
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
        className={styles.infoInput}
        placeholder={placeholder}
      />
      <div className={styles.errMsg}>{err && <span>{err}</span>}</div>
    </div>
  );
};

export default InfoInput;
