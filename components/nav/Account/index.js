const API_BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";
import Button from "@/components/nav/Button/Button.js";
import AccountEmail from "./AccountEmail";
import AccountImage from "./AccountImage";
import styles from "./account.module.css";
import Link from "next/link";

function Account({ profileImage, name, email }) {

  // 임의로 로그아웃 기능 구현
  const handleClick = () => {
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  return (
    <div className={styles.account}>
      {email && (
        <div className={styles.accountWrapper}>
          <AccountImage src={profileImage} name={name} />
          <AccountEmail>{email}</AccountEmail>
        </div>
      )}
      {email ? (
        <Link href={"/"}>
          <Button onClick={handleClick}>로그아웃</Button>
        </Link>
      ) : (
        <div className={styles.buttonsWrapper}>
          <Link href={"/LoginPage"} style={{textDecoration: 'none'}}>
            <Button className={styles.login_button}>로그인 </Button>
          </Link>
          <Link href={"/SignupPage"} style={{textDecoration: 'none'}}>
            <Button className={styles.signup_button}>회원가입</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Account;
