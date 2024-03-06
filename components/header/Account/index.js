const API_BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";
import Button from "@/components/header/Button/Button.js";
import { useContext, useEffect, useState } from "react";
import AccountEmail from "./AccountEmail";
import AccountImage from "./AccountImage";
import styles from "./account.module.css";
import Link from "next/link";
import { getUserData } from "@/components/api/Api";
import { tokenContext } from "@/pages/_app";

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = req.cookies;

  const accessToken = cookies.accessToken;

  console.log(accessToken, '---token---');
  try {
    const userResponse = await fetch(`${API_BASE_URL}/users`, {
      headers: {
        Authorization : `Bearer ${accessToken}`,
      }
    })
    const res = await userResponse.json();
    const userId = res[0].id;

    const { result } = await getUserData(accessToken, userId);
    const profileImage = result[0].image_source ;
    const name = result[0].name ;
    const email = result[0].email ;

    return {
      props: {
        profileImage,
        name,
        email
      },
    };
} catch (e) {
  console.log(e);
}
}

function Account({ profileImage, name, email }) {
  return (
    <div className={styles.account}>
      <AccountImage src={profileImage} name={name} />
      <AccountEmail>{email}</AccountEmail>
      <Link href={"/LoginPage"}>
        <Button>로그아웃</Button> : <Button>로그인</Button>
      </Link>
      <Link href={"/SignupPage"}>
        <Button> / 회원가입</Button>
      </Link>
    </div>
  );
}

export default Account;
