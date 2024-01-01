import { useState } from 'react';
import TimeAgo from './MainFileTimeAgo'
const tempImage = 'https://s3-alpha-sig.figma.com/img/7f74/ead6/eb1ccd75abb3bcb7fbda1536cf0718ab?Expires=1704672000&Signature=LiCmhbMFxPcHwHM~eunm~GUqamXyo6dqYjN6VHI5l4e2DAZIn99n0w4cLbS~aTKGgrbgBee2CX8y9Bh0sAaDRe0JX5erbHDrLwAKp6CElf1NIZjvsxtk9VCgEoBFnNA-stzLMmV79kdwV8TUupeXMzf~4XZImr3-VjA5bgfjhm51tGF2YTKmKh1YsvIZ3jrj7DwHi6Zfg6mMYVFMDhG6cBW8AjzgIVf3njiImPKo5k1y5m0k4NMF-o9E7jzkk1raemYMaTeNjcanw31oEjR0K7aFwtC9YzEd0aH0mNH72xjpKFyrep1tKNo2JLoNCiUaSSwIG-EfNVAy7NJH0h87Qg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
const url = 'https://bootcamp-api.codeit.kr/api/sample/folder';

function MainFile({value, onClick, i}){

  const [src, setSrc] = useState('');
  const [script, setScript] = useState('');
  const [time, setTime] = useState('');
  const [site, setSite] = useState('');

  async function getInfo(i) {
    const response = await fetch(url)
    const result = await response.json();
    setSrc((result.folder.links[i].imageSource === undefined) ? tempImage : result.folder.links[i].imageSource )
    setScript(result.folder.links[i].description)
    setTime(result.folder.links[i].createdAt)
    setSite(result.folder.links[i].url)
  }
  getInfo(i);

  let year = new Date(time).getFullYear();
  let month = new Date(time).getMonth();
  let date = new Date(time).getDate();
  let editedTime = year + '-' + (month+1) + '-' + date;

  const handleClick = () => onClick(site);
  return (
    <div className="MainFile" onClick={handleClick}>
      <div className='item01'>
        <img src={src} alt={value} />
      </div>
      <div className='item02'>
        <div className="timeAgo"><TimeAgo time={time}/></div>
        <div className="description">{script}</div>
        <div className="editTime"><div>{editedTime}</div></div>
      </div>
    </div>
  )
}
export default MainFile;