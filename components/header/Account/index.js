import Button from "@/components/header/Button/Button.js";
import { useState } from "react";
import AccountEmail from "@/components/header/Account/AccountEmail";
import AccountImage from "@/components/header/Account/AccountImage";
import imgSrc from "@/public/profile img.svg";
import { getUserData } from "@/components/api/Api";
import styles from "./account.module.css";
import Link from "next/link";

function Account() {
  const [info, setInfo] = useState();
  const [imgsrc, setImgsrc] = useState();
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = async () => {
    const { email } = await getUserData();
    setInfo(email);
    setImgsrc(imgSrc);
    setIsLogin(true);
  };

  const handleLogout = () => {
    setInfo("");
    setImgsrc("");
    setIsLogin(false);
  };

  return (
    <div className={styles.account}>
      <AccountImage value={imgsrc} />
      <AccountEmail content={info} />
      <Link href={"Login"}>
      <Button
        text={isLogin ? "로그아웃" : "로그인"}
        // onClick={isLogin ? handleLogout : handleLogin}
      />
      </Link>
      <Link href={"Signin"}>
        <Button text="/ 회원가입" />
      </Link>
    </div>
  );
}

export default Account;
