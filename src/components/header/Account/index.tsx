import Button from "components/header/Button";
import { useState } from "react";
import AccountEmail from "components/header/Account/AccountEmail";
import AccountImage from "components/header/Account/AccountImage";
import imgSrc from "assets/profile img.svg";

const API_BASE_URL_USER: string = "https://bootcamp-api.codeit.kr/api/sample/user";

function Account() {
  const [info, setInfo] = useState("");
  const [imgsrc, setImgsrc] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = ():void => {
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
    <div className="Account">
      <AccountImage value={imgsrc} />
      {/* children 처리 확인 필요 */}
      <AccountEmail><div>{info}</div></AccountEmail>
      <Button onClick={isLogin ? handleLogout : handleLogin}>
        <div>{isLogin ? "로그아웃" : "로그인"}</div>
        </Button>
    </div>
  );
}

export default Account;
