import { useState } from "react";
import styles from "./input.module.css";

const InfoInput = ({
  ref,
  errMsg_1,
  errMsg_2,
  width,
  height,
  placeholder = "",
  setValue,
  value,
  name,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleOnchange = (e) => {
    setInputValue(e.target.value);
    // 상위 컴포넌트에서 전달받은 세터 함수로 객체관리
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    // 이메일이 다섯글자 미만이면 에러 메세지 출력 
    if (e.target.value.length < 5) {
      setErrMsg(errMsg_1);
      setIsErr(true);
      // 이메일이 형식을 갖추기 않으면 에러 메세지 출력 
    } else if (!e.target.value.includes("@")) {
      setIsErr(true);
      setErrMsg(errMsg_2);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        ref={ref}
        value={inputValue}
        onChange={handleOnchange}
        onBlur={handleBlur}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        className={styles.infoInput}
        placeholder={placeholder}
      />
      <div className={styles.errMsg}>{isErr && <span>{errMsg}</span>}</div>
    </div>
  );
};

export default InfoInput;
