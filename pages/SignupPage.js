import InfoButton from "@/components/info/InfoButton";
import InfoInput from "@/components/info/InfoInput";
import styles from "@/styles/LoginPage.module.css";
import { checkUserInfo } from "@/components/api/Api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function SignupPage() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const router = useRouter();

  const handleClick = () => {
    router.push("/LoginPage");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const checkEmail = async (e) => {
    e.preventDefault();
      const { error } = await checkUserInfo({
        "email": `${info.email}`,
      })
      console.log(error)
  };
  

  return (
    <div className={styles.LoginPage}>
      <div className={styles.wrapper}>
        <div>
          <span>이미 회원이신가요?</span>
          <span onClick={handleClick}>로그인 하기</span>
        </div>
        <form className={styles.form} onSubmit={checkEmail}>
          <label htmlFor="email">이메일</label>
          <InfoInput
            name="email"
            value={info}
            setValue={setInfo}
            placeholder="이메일을 입력해주세요"
            width={300}
            height={40}
            err={err}
          />
          <InfoButton>중복확인</InfoButton>
        </form>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="password">비밀번호</label>
          <InfoInput
            name="password"
            value={info}
            setValue={setInfo}
            placeholder="비밀번호를 입력해주세요"
            width={300}
            height={40}
            errMsg_1="비밀번호를 다시 입력해주세요."
          />
          <label htmlFor="password">비밀번호 확인</label>
          <InfoInput
            name="passwordCheck"
            value={info}
            setValue={setInfo}
            placeholder="비밀번호를 입력해주세요"
            width={300}
            height={40}
            errMsg_1="비밀번호를 다시 입력해주세요."
          />
          <InfoButton>회원가입</InfoButton>
        </form>
        <div>소셜로그인</div>
      </div>
    </div>
  );
}

export default SignupPage;
