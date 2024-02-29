import InfoButton from "@/components/info/InfoButton";
import InfoInput from "@/components/info/InfoInput";
import styles from "@/styles/LoginPage.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { postUserInfo } from "@/components/api/Api";

function LoginPage() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [postState, setPostState] = useState(null);
  const [token, setToken] = useState(null);
  const [moveCheck, setMoveCheck] = useState(false);
  const router = useRouter();

  // 로그인 버튼은 클릭 -> 유저 정보 post -> response에서 status code 확인
  // result에서 토큰 가져옴 ->
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (info.email && info.password) {
      const { res, result } = await postUserInfo(info);
      const { status } = res;
      const { data } = result;
      setToken(data?.accessToken);
      setPostState(status);
    } else {
      alert("이메일 또는 비밀번호를 확인해 주세요");
      setInfo({
        ...info,
        email: "",
        password: "",
      });
    }
    console.log(info);
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

  useEffect(() => {
    // 전역객체가 생성되기 전에 window에 접근하면 undefined 이다 마운트된 후에 실행되는
    // 유즈이펙트로 localStorage를 사용하면 그 문제를 해결할 수 있다.
    postState === 200 && localStorage.setItem("login", token);
    if (postState === 200) {
      console.log("성공");
      router.push("/FolderPage");
    } else if (postState === 400) {
      alert("이메일 또는 비밀번호를 확인해 주세요");
    }
  }, [postState, token]);

  const handleClick = () => {
    // 회원 가입하기를 클릭하면 로컬스토리지에서 토큰을 가져와 변수 TOKEN에 담긴 값과 같은지 비교 후
    // 페이지를 이동합니다
    setMoveCheck(true);
  };
  useEffect(() => {
    const loginCheck = localStorage.getItem("login");
    if (loginCheck && token) {
      router.push("/FolderPage");
    } else if (moveCheck){
      router.push("/SignupPage");
    }
  }, [moveCheck]);

  return (
    <div className={styles.LoginPage}>
      <div className={styles.wrapper}>
        <div>
          <span>회원이 아니신가요? </span>
          <span onClick={handleClick}>회원 가입하기</span>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email">이메일</label>
          <InfoInput
            name="email"
            value={info}
            setValue={setInfo}
            placeholder="이메일을 입력해주세요"
            size={{width: 300, height:40}}
            errMsg_1="이메일을 다시 입력해주세요."
            errMsg_2="이메일을 형식에 맞게 작성해주세요."
          />
          <label htmlFor="password">비밀번호</label>
          <InfoInput
            name="password"
            value={info}
            setValue={setInfo}
            placeholder="비밀번호를 입력해주세요"
            size={{width: 300, height:40}}
            errMsg_1="비밀번호를 다시 입력해주세요."
          />
          <InfoButton>로그인</InfoButton>
        </form>
        <div>소셜로그인</div>
      </div>
    </div>
  );
}

export default LoginPage;
