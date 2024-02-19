import Button from "@/components/header/Button/Button";
import { useState } from "react";
import AccountEmail from "@/components/header/Account/AccountEmail";
import AccountImage from "@/components/header/Account/AccountImage";
import imgSrc from "@/public/profile img.svg";
import styles from './account.module.css'

const API_BASE_URL_USER = "https://bootcamp-api.codeit.kr/api/sample/user";

function Account() {
  const [info, setInfo] = useState();
  const [imgsrc, setImgsrc] = useState();
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    fetch(API_BASE_URL_USER)
      .then((response) => response.json())
      .then((result) => {
        setInfo(result["email"]);
      });
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
      <Button
        text={isLogin ? "로그아웃" : "로그인"}
        onClick={isLogin ? handleLogout : handleLogin}
      />
    </div>
  );
}

export default Account;
