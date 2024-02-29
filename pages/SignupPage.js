import InfoButton from "@/components/info/InfoButton";
import InfoInput from "@/components/info/InfoInput";
import styles from "@/styles/LoginPage.module.css";
import { checkUserInfo, isSignupValid } from "@/components/api/Api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function SignupPage() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [err,setErr] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });

  const handleClick = () => {
    router.push("/LoginPage");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const { error, data } = await isSignupValid(info)
    if(error) {
      alert(error?.message)
    }
    if(data) {
      alert('회원가입 성공')
      localStorage.setItem('login', data.accessToken)
      if(localStorage.getItem('login')){
        router.push('/FolderPage')
      }
    }
    }catch(err){
      console.log(err);
    }
  };

  const checkEmail = async () => {
    try {
      const { error, data } = await checkUserInfo({
        email: `${info.email}`,
      });
      if(error){
        alert(error?.message);
      }
      if(data?.isUsableNickname){
        alert('사용가능한 아이디 입니다.')
      }
    } catch(err) {
      console.log(err);
    }
  };
  
  const handleDuplicate = (e) => {
    e.preventDefault();
    checkEmail();
  };

  const ErrMsgList = {
    email: {
      msg1: "이메일을 다시 입력해주세요.",
      msg2: "이메일을 형식에 맞게 작성해주세요."
    },
    password: {
      msg1: "비밀번호를 입력해주세요.",
    },
    passwordCheck: {
      msg1: "비밀번호를 다시 입력해주세요.",
      msg2: "비밀번호가 일치하지 않습니다"
    }
  }
  
  const handleErrMsg = (target) => {
    if(target === 'email'){
      if (info[target].length < 5) {
        // 이메일이 다섯 글자 미만으로 작성됐을때 
        setErr({...err, [target]: ErrMsgList[target].msg1});
        return;
      } else if (!info[target].includes("@")) {
        // 이메일이 형식을 갖추기 않으면 에러 메세지 출력
        setErr({...err, [target]: ErrMsgList[target].msg2});
        return;
      }
    } else if (target === 'password'){
      if (info[target].length < 8) {
        // 비밀번호가 비어있을때 
        setErr({...err, [target]: ErrMsgList[target].msg1});
        return;
      }
    } else if (target === 'passwordCheck') {
      // 비밀번호, 비밀번호 확인 값이 서로 일치 하지 않을때
      if(info.password !== info.passwordCheck) {
        setErr({...err, [target]: ErrMsgList[target].msg2});
        return;
      }
    }
    setErr({...err, [target]:''})
  }

  return (
    <div className={styles.LoginPage}>
      <div className={styles.wrapper}>
        <div>
          <span>이미 회원이신가요? </span>
          <span onClick={handleClick}>로그인 하기</span>
        </div>
        <form className={styles.form} onSubmit={handleDuplicate}>
          <label htmlFor="email">이메일</label>
          <InfoInput
            name="email"
            value={info}
            setValue={setInfo}
            placeholder="이메일을 입력해주세요"
            size={{ width: 300, height: 40 }}
            err={err.email}
            handleErr={handleErrMsg}
          />
          <InfoButton>중복확인</InfoButton>
        </form>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="password">비밀번호</label>
          <InfoInput
            name="password"
            value={info}
            setValue={setInfo}
            placeholder="영문, 숫자를 조합해 8자 이상 입력해주세요"
            size={{ width: 300, height: 40 }}
            err={err.password}
            handleErr={handleErrMsg}
          />
          <label htmlFor="password">비밀번호 확인</label>
          <InfoInput
            name="passwordCheck"
            value={info}
            setValue={setInfo}
            placeholder="비밀번호와 일치하는 값을 입력해주세요"
            size={{ width: 300, height: 40 }}
            err={err.passwordCheck}
            handleErr={handleErrMsg}
          />
          <InfoButton>회원가입</InfoButton>
        </form>
        <div>소셜로그인</div>
      </div>
    </div>
  );
}

export default SignupPage;
