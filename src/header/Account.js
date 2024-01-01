import { useState } from 'react';
import Button from './Button';
import AccountEmail from './AccountEmail';
import AccountImage from './AccountImage';
import imgSrc from '../img/profile img.svg';
const url = 'https://bootcamp-api.codeit.kr/api/sample/user';
 

function Account(){
  const [info, setInfo] = useState();
  const [imgsrc, setImgsrc] = useState();
  const [login, setLogin] = useState('로그인');

  const handleLogin = () => {
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
      setInfo(result['email']);
    })
      setImgsrc(imgSrc);
      setLogin('로그아웃')
  }
  const handleLogout = () => {
      setInfo('');
      setImgsrc('');
      setLogin('로그인')
  }
  return (
    <div className="Account">
        <AccountImage value={imgsrc} /> 
        <AccountEmail content={info}/>
        <Button text={login} onClick={login==='로그인' ? handleLogin : handleLogout}/>
    </div>
  )
}

export default Account;