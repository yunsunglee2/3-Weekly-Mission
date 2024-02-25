import Button from "@/components/header/Button/Button.js";
import { useEffect, useState } from "react";
import styles from "./account.module.css";
import Link from "next/link";

function Account({ token, handleToken }) {
  return (
    <div className={styles.account}>
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
