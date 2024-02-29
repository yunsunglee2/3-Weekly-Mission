import Button from "@/components/header/Button/Button.js";
import { useEffect, useState } from "react";
import AccountEmail from "./AccountEmail";
import AccountImage from "./AccountImage";
import styles from "./account.module.css";
import Link from "next/link";
import { getUserData } from "@/components/api/Api";

function Account({ token, handleToken }) {
  const [email, setEmail] = useState();
  const [profileImage, setProfileImage] = useState();
  const [name, setName] = useState()

  const getUserEmail = async () => {
    const { email, profileImageSource, name } = await getUserData()
    setEmail(email)
    setProfileImage(profileImageSource)
    setName(name)
  }
  useEffect(()=> {
    getUserEmail();
  },[token])

  return (
    <div className={styles.account}>
      {token && <AccountImage src={profileImage} name={name}/>}
      {token && <AccountEmail>{email}</AccountEmail>}
      <Link href={token ? "/" : "LoginPage"}>
        <Button onClick={handleToken}>{token ? "로그아웃" : "로그인"}</Button>
      </Link>
      <Link href={"SignupPage"}>
        <Button>{token ? "" : "/ 회원가입"}</Button>
      </Link>
    </div>
  );
}

export default Account;
