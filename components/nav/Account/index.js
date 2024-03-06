const API_BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";
import Button from "@/components/nav/Button/Button.js";
import AccountEmail from "./AccountEmail";
import AccountImage from "./AccountImage";
import styles from "./account.module.css";
import Link from "next/link";

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
