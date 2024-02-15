import Button from "components/header/Button";
import { useState } from "react";
import AccountEmail from "components/header/Account/AccountEmail";
import AccountImage from "components/header/Account/AccountImage";
import ProfileIMG from "assets/profile img.svg";
import { getUserData } from "components/main/api/Api";

function Account() {
  const [info, setInfo] = useState<string>("");
  const [imgsrc, setImgsrc] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleLogin = async () => {
    const { data } = await getUserData();
    setInfo(data.email);
    setImgsrc(ProfileIMG);
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
      <AccountEmail>
        <div>{info}</div>
      </AccountEmail>
      <Button onClick={isLogin ? handleLogout : handleLogin}>
        <div>{isLogin ? "로그아웃" : "로그인"}</div>
      </Button>
    </div>
  );
}

export default Account;
