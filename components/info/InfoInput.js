import { useState } from "react";
import styles from "./input.module.css";

const InfoInput = ({
  ref,
  width,
  height,
  setValue,
  value,
  name,
  placeholder = "",
  err = "",
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

  const handleBlur = () => {
    console.log(value);
    // 상위 컴포넌트에서 에러메세지를 관리하는 방법
    // 이메일이 다섯글자 미만이면 에러 메세지 출력
    if (name === "email") {
      if (value.email.length < 5) {
        setErrMsg("다섯글자 이상 작성해주세요");
        setIsErr(true);
        return;
        // 이메일이 형식을 갖추기 않으면 에러 메세지 출력
      } else if (!value.email.includes("@")) {
        setErrMsg("형식에 맞게 작성해주세요");
        setIsErr(true);
        return;
      }
      setErrMsg("");
      setIsErr(false);
    }
    if (name === "password") {
      if (!value.password.length) {
        setErrMsg("비밀번호를 입력해주세요");
        setIsErr(true);
        return;
      }
      setErrMsg("");
      setIsErr(false);
    }
    if (name === "passwordCheck") {
      if (!value.password.length) {
        setErrMsg("비밀번호를 입력해주세요");
        setIsErr(true);
        return;
      }
      // 비밀번호, 비밀번호 확인 값이 서로 일치 하지 않을때
      if (value.password !== value.passwordCheck) {
        setErrMsg("비밀번호가 일치하지 않습니다");
        setIsErr(true);
        return;
      }
      setErrMsg("");
      setIsErr(false);
    }
  };
  // 중복확인 메세지 출력
  if (err) {
    setErrMsg("비밀번호가 일치하지 않습니다");
    setIsErr(true);
  }

  return (
    <div className={styles.wrapper}>
      <input
        name={name}
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
