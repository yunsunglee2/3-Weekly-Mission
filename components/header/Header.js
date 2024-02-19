import { useState, useEffect } from 'react';
import defaultProfile from '@/public/Avatar.svg'
import logoImage from '@/public/Linkbrary.svg'
import Account from "@/components/header/Account/Account";
import Logo from "@/components/header/Logo/Logo";
import User from "@/components/header/User/User";
import AddInput from '@/components/header/AddInput/AddInput.js';
import {getOwner} from '@/components/main/api/Api.js';
import styles from './Header.module.css';

function Header({serachIsLoading}) {
  const getInfo = async () => {
      const { folder } = await getOwner();
      setProfile(folder.owner.profileImageSource)
      setOwner(folder.owner.name)
      setName(folder.name)
    }

    const [profile, setProfile] = useState(defaultProfile);
    const [owner, setOwner] = useState('@코드잇');
    const [name, setName] = useState('');

    useEffect(()=>{
      getInfo();
    },[])

  return (
    <div className={styles.Header}>
        <div className={styles.box01}>
          <div className={styles.item01}>
          <Logo value={logoImage}/>
            <Account/>
          </div>
        </div> 
        {serachIsLoading ?  
        <AddInput/>
        :
        <div className={styles.box02}><User profileImage={profile} folderOwner={owner} folderName={name} /></div>
        }
        
    </div>
  )
}

export default Header;