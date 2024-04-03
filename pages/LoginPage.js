import InfoButton from "@/components/info/InfoButton";
import InfoInput from "@/components/info/InfoInput";
import styles from "@/styles/infoPage.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { postUserInfo } from "@/components/api/Api";
import Header from "@/components/header";

function LoginPage() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    email: "",
    password: "",
  });
  const [postState, setPostState] = useState(null);
  const [moveCheck, setMoveCheck] = useState(false);
  const router = useRouter();

  // 토큰이 있다면
  // if(token) router.push('/');

  // ****** 로그인 버튼은 클릭 -> 유저 정보 post -> response에서 status code 확인
  // ****** result에서 토큰 가져옴 ->쿠키에 저장

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (info.email && info.password) {
      try {
        const { res, result } = await postUserInfo(info);
        const { status } = res;
        setPostState(status);
        document.cookie = `accessToken=${result.accessToken}; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
        document.cookie = `refreshToken=${result.refreshToken}; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
      } catch (e) {
        console.log(e);
      }
    }
  };

  // 전역객체가 생성되기 전에 window에 접근하면 undefined 이다 마운트된 후에 실행되는
  // 유즈이펙트로 localStorage를 사용하면 그 문제를 해결할 수 있다.
  // postState === 200 && localStorage.setItem("accessToken", token);
  useEffect(() => {
    if (postState === 200) {
      console.log("성공");
      router.push("/folder/0");
    } else if (postState === 400) {
      console.log("실패");
      setErr({
        ...err,
        password: "로그인 정보를 확인하세요.",
      });
    }
  }, [postState]);

  const handleClick = () => {
    // 회원 가입하기를 클릭하면 로컬스토리지에서 토큰을 가져와 변수 TOKEN에 담긴 값과 같은지 비교 후
    // 페이지를 이동합니다
    setMoveCheck(true);
  };

  useEffect(() => {
    if (moveCheck) {
      router.push("/SignupPage");
    } else {
      router.push("/LoginPage");
    }
  }, [moveCheck]);

  const ErrMsgList = {
    email: {
      msg1: "이메일을 다시 입력해주세요.",
      msg2: "이메일을 형식에 맞게 작성해주세요.",
    },
    password: {
      msg1: "비밀번호를 입력해주세요.",
    },
    passwordCheck: {
      msg1: "비밀번호를 다시 입력해주세요.",
      msg2: "비밀번호가 일치하지 않습니다",
    },
  };

  const handleErrMsg = (target) => {
    if (target === "email") {
      if (info[target].length < 5) {
        // 이메일이 다섯 글자 미만으로 작성됐을때
        setErr({ ...err, [target]: ErrMsgList[target].msg1 });
        return;
      } else if (!info[target].includes("@")) {
        // 이메일이 형식을 갖추기 않으면 에러 메세지 출력
        setErr({ ...err, [target]: ErrMsgList[target].msg2 });
        return;
      }
    } else if (target === "password") {
      if (!info[target].length) {
        // 비밀번호가 비어있을때
        setErr({ ...err, [target]: ErrMsgList[target].msg1 });
        return;
      }
    }
    setErr({ ...err, [target]: "" });
  };

  const handleChange = (target, value) => {
    setInfo({
      ...info,
      [target]: value,
    });
  };

  return (
    <>
      <Header />
      <div className={styles.LoginPage}>
        <div className={styles.wrapper}>
          <div>
            <span>회원이 아니신가요? </span>
            <span onClick={handleClick} className={styles.goSignup}>
              회원 가입하기
            </span>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="email">이메일</label>
            <InfoInput
              name="email"
              value={info.email}
              setValue={setInfo}
              placeholder="이메일을 입력해주세요."
              size={{ width: 300, height: 40 }}
              err={err.email}
              handleErr={handleErrMsg}
              handleChange={handleChange}
            />
            <label htmlFor="password">비밀번호</label>
            <InfoInput
              name="password"
              value={info.password}
              setValue={setInfo}
              placeholder="비밀번호를 입력해주세요."
              size={{ width: 300, height: 40 }}
              err={err.password}
              handleErr={handleErrMsg}
              handleChange={handleChange}
            />
            <InfoButton>로그인</InfoButton>
          </form>
          <div>소셜로그인</div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
